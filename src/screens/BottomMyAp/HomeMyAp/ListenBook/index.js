import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {
    Animated,
    Dimensions,
    Image,
    Pressable,
    TouchableOpacity,
    View,
} from 'react-native';

import { Block, Container, Icon, ModalBox, Text } from '@components';
import { useAppDispatch, useAppSelector } from '@hooks';
import Slider from '@react-native-community/slider';
import { changeLoading } from '@redux/reducerNew';
import { useGetDetailChapterBookQuery } from '@redux/servicesNew';
import TrackPlayer, {
    Capability,
    Event,
    RepeatMode,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { makeStyles, useTheme } from 'themeNew';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { icons, NotFoundIcon } from '@assets';

const { width, height } = Dimensions.get('window');

const handleDataPlayer = data => {
    const obj = {
        url: data.linkAudio,
        artwork: data.image,
        artist: 'Johny Dang',
        title: data.title,
        duration: 1000,
    };
    return obj;
};

const setupPlayer = async data => {
    try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
            ],
        });
        await TrackPlayer.add(data);
    } catch (error) {
        console.log(error);
    }
};

const togglePlayBack = async playBackState => {
    try {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        console.log(currentTrack, playBackState, State.Playing);

        if (currentTrack != null) {
            if (playBackState == State.Paused) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    } catch (e) {
        console.log('[Error] togglePlayBack ', e);
    }
};

export const ListenBook = ({ route }) => {
    const { idChapter, nameBook } = route.params;
    const playBackState = usePlaybackState();
    const progress = useProgress();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);
    const style = useStyle(themeStore);
    const bottomSheetRef = useRef();
    const inset = useSafeAreaInsets();

    //   custom states
    const [songIndex, setsongIndex] = useState(0);
    const [repeatMode, setRepeatMode] = useState('off');
    const [trackArtist, setTrackArtist] = useState();
    const [trackArtwork, setTrackArtwork] = useState();
    const [visibleModal, setVisibleModal] = useState(false);
    const dispatch = useAppDispatch();

    // custom referecnces
    const scrollX = useRef(new Animated.Value(0)).current;
    const songSlider = useRef(null);
    const myInfo = useAppSelector(state => state.root.auth);
    const dataGet = useGetDetailChapterBookQuery({
        id: idChapter,
        token: myInfo.token,
    }).data;

    const allBooks = useAppSelector(state => state.root.book.bookList);

    const snapPoints = useMemo(
        () => [height - 300 + inset.bottom],
        [inset.bottom],
    );

    //   changing the track on complete
    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        if (
            event.type === Event.PlaybackTrackChanged &&
            event.nextTrack !== null
        ) {
            const track = await TrackPlayer.getTrack(event.nextTrack);
            const { title, artwork, artist } = track;
            // setTrackTitle(title);
            setTrackArtist(artist);
            setTrackArtwork(artwork);
        }
    });

    const repeatIcon = () => {
        if (repeatMode == 'off') {
            return 'repeat-off';
        }

        if (repeatMode == 'track') {
            return 'repeat-once';
        }

        if (repeatMode == 'repeat') {
            return 'repeat';
        }
    };

    const changeRepeatMode = () => {
        // if (repeatMode == 'off') {
        //     TrackPlayer.fMode(RepeatMode.Track);
        //     TrackPlayer.
        //     setRepeatMode('track');
        // }

        if (repeatMode == 'track') {
            TrackPlayer.setRepeatMode(RepeatMode.Queue);
            setRepeatMode('repeat');
        }

        if (repeatMode == 'repeat') {
            TrackPlayer.setRepeatMode(RepeatMode.Off);
            setRepeatMode('off');
        }
    };

    const skipTo = async trackId => {
        await TrackPlayer.skip(trackId);
    };

    useEffect(() => {
        dispatch(changeLoading('SHOW'));

        if (dataGet) {
            dispatch(changeLoading('HIDE'));
            const dataClean = handleDataPlayer(dataGet);

            setupPlayer([dataClean]);

            scrollX.addListener(({ value }) => {
                //   console.log(`ScrollX : ${value} | Device Width : ${width} `);

                const index = Math.round(value / width);
                skipTo(index);
                setsongIndex(index);

                //   console.log(`Index : ${index}`);
            });

            return () => {
                scrollX.removeAllListeners();
            };
        }
    }, [dataGet]);

    const skipToNext = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex + 1) * width,
        });
    };

    const skipToPrevious = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex - 1) * width,
        });
    };

    const renderSongs = ({ item, index }) => {
        return (
            <Animated.View style={style.mainWrapper}>
                <View style={[style.imageWrapper, style.elevation]}>
                    <Image
                        //   source={item.artwork}
                        source={{ uri: trackArtwork }}
                        style={style.musicImage}
                    />
                </View>
            </Animated.View>
        );
    };

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                {...props}
                enableTouchThrough={true}
            />
        ),
        [],
    );

    const ItemBook = ({ item }) => {
        return (
            <Block flex height={70} row alignCenter marginHorizontal={10}>
                <Image source={{ uri: item.image }} style={style.imageStyle} />
                <Block width="70%" marginLeft={10} paddingTop={10}>
                    <Text fontType="bold">{item.name}</Text>
                    <Text flexGrow={1}>{item.introduction}</Text>
                </Block>
                <Pressable style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Icon
                        component="Ionicons"
                        name="play-circle-outline"
                        size={30}
                        color={colors.primary}
                    />
                </Pressable>
            </Block>
        );
    };

    const bottomSheetReadyRead = () => {
        return (
            <BottomSheet
                index={-1}
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}>
                <Block
                    backgroundColor={colors.white}
                    paddingHorizontal={10}
                    alignCenter
                    flex>
                    <Text marginVertical={10} size={16} fontType="bold">
                        Danh sach cho
                    </Text>

                    <BottomSheetFlatList
                        data={allBooks}
                        renderItem={ItemBook}
                        keyExtractor={keyExtractor}
                        style={{
                            width: width,
                            paddingHorizontal: 30,
                            marginTop: 10,
                        }}></BottomSheetFlatList>
                </Block>
            </BottomSheet>
        );
    };

    const renderShare = () => {
        return (
            <ModalBox
                isVisible={true}
                onBackdropPress={() => setVisibleModal(!visibleModal)}>
                <Block
                    width={width * 0.7}
                    backgroundColor={'white'}
                    radius={15}
                    alignSelf={'center'}
                    justifyCenter={'center'}
                    alignCenter
                    padding={20}>
                    <Text color={colors.grey6} fontType="bold1" size={16}>
                        Chia sẻ cuốn sách thú vị
                    </Text>
                    {trackArtwork ? (
                        <Image
                            //   source={item.artwork}
                            source={{ uri: trackArtwork }}
                            style={style.imageBookShare}
                        />
                    ) : (
                        <NotFoundIcon width={100} height={100} />
                    )}

                    <Block
                        marginTop={20}
                        row
                        width={width * 0.3}
                        space="around">
                        <Image source={icons.facebook} style={style.iconLogo} />
                        <Image source={icons.twitter} style={style.iconLogo} />
                    </Block>
                </Block>
            </ModalBox>
        );
    };

    const keyExtractor = item => item.toString();

    return (
        <Container style={style.container}>
            {/* music player section */}
            <View style={style.mainContainer}>
                {/* Image */}

                <Animated.FlatList
                    ref={songSlider}
                    renderItem={renderSongs}
                    data={[
                        {
                            id: 'trackId',
                            url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
                            title: 'Track Title',
                            artist: 'Track Artist',
                            artwork:
                                'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg',
                        },
                    ]}
                    keyExtractor={keyExtractor}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { x: scrollX },
                                },
                            },
                        ],
                        { useNativeDriver: true },
                    )}
                />

                {/* Title & Artist Name */}
                <Block alignCenter>
                    <Text
                        fontType="bold1"
                        style={[style.songContent, style.songTitle]}>
                        {nameBook}
                    </Text>
                    <Text color={colors.grey6} size={14}>
                        {trackArtist}
                    </Text>
                </Block>

                {/* songslider */}
                <Block>
                    <Slider
                        style={style.progressBar}
                        value={progress.position}
                        minimumValue={0}
                        maximumValue={progress.duration}
                        thumbTintColor={colors.redPastel}
                        minimumTrackTintColor={colors.primary}
                        maximumTrackTintColor={colors.grey12}
                        onSlidingComplete={async value => {
                            await TrackPlayer.seekTo(value);
                        }}
                    />

                    {/* Progress Durations */}
                    <View style={style.progressLevelDuraiton}>
                        <Text style={style.progressLabelText}>
                            {new Date(progress.position * 1000)
                                .toLocaleTimeString()
                                .substring(3)}
                        </Text>
                        <Text style={style.progressLabelText}>
                            {new Date(
                                (progress.duration - progress.position) * 1000,
                            )
                                .toLocaleTimeString()
                                .substring(3)}
                        </Text>
                    </View>
                </Block>

                {/* music control */}
                <View style={style.musicControlsContainer}>
                    <TouchableOpacity onPress={skipToPrevious}>
                        <Ionicons
                            name="play-skip-back-outline"
                            size={35}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => togglePlayBack(playBackState)}>
                        <Ionicons
                            name={
                                playBackState === State.Playing
                                    ? 'ios-pause-circle'
                                    : 'ios-play-circle'
                            }
                            size={75}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={skipToNext}>
                        <Ionicons
                            name="play-skip-forward-outline"
                            size={35}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* bottom section */}
            <View style={style.bottomSection}>
                <View style={style.bottomIconContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons
                            name="heart-outline"
                            size={25}
                            color="#888888"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={changeRepeatMode}>
                        <MaterialCommunityIcons
                            name={`${repeatIcon()}`}
                            size={25}
                            color={repeatMode !== 'off' ? '#FFD369' : '#888888'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons
                            name="share-outline"
                            size={25}
                            color="#888888"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => bottomSheetRef.current?.snapToIndex(0)}>
                        <Ionicons
                            name="ellipsis-horizontal"
                            size={25}
                            color="#888888"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {bottomSheetReadyRead()}
            {renderShare()}
        </Container>
    );
};
const useStyle = makeStyles()(({ normalize, colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomSection: {
        borderTopColor: colors.grey14,
        borderWidth: normalize(1)('moderate'),
        borderBottomColor: colors.grey14,
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
    },

    bottomIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },

    mainWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },

    imageWrapper: {
        width: 300,
        height: 340,
        marginBottom: 25,
    },
    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    elevation: {
        elevation: 5,

        shadowColor: '#ccc',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    songContent: {
        textAlign: 'center',
        color: colors.textDark,
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '600',
    },

    songArtist: {
        fontSize: 16,
        fontWeight: '300',
    },

    progressBar: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    },
    progressLevelDuraiton: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLabelText: {
        color: colors.textDark,
    },

    musicControlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        width: '60%',
    },
    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    iconLogo: {
        width: normalize(30)('moderate'),
        height: normalize(30)('moderate'),
    },
    imageBookShare: {
        height: normalize(200)('moderate'),
        width: normalize(150)('moderate'),
    },
}));
