import {
    Block,
    Text,
    HeaderWithButton,
    AnimatedImage,
    Button,
} from '@components';
import { SCREEN_HEIGHT, SCREEN_WIDTH, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useAppSelector } from '@hooks';
import { useGetAllChapterBookMutation } from '@redux/servicesNew';
import { theme } from '@theme';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';
import { PlayListenIcon, NextListenIcon, PreviousListenIcon } from '@assets';
import { useAudioHelper } from 'helper/audio-helper';
import IconView from '@components/Icon';
import * as Progress from 'react-native-progress';

const listSpeedValues = [
    { value: 0.5, text: 'x0.5' },
    { value: 0.75, text: 'x0.75' },
    { value: 1.0, text: 'x1.0' },
    { value: 1.25, text: 'x1.25' },
    { value: 1.4, text: 'x1.5' },
]

export const ListenBook = props => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);
    const { item, nameBook } = props.route.params;
    const styles = useStyle(themeStore);
    const [currentTime, setCurrentTime] = useState(0);

    const renderImage = useCallback(() => {
        return (
            <Block marginHorizontal={25}>
                <AnimatedImage
                    source={item?.image}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text
                    lineHeight={30}
                    size={20}
                    fontType="bold"
                    color={colors.textInBox}>
                    {item?.title}
                </Text>
                <Text lineHeight={30} size={14} color={colors.grey10}>
                    Jonny Dang
                </Text>
            </Block>
        );
    }, [colors.grey10, colors.textInBox, item?.image, item.title, styles.image]);

    const sound = useAudioHelper({
        listSounds: [
            {
                type: 'network',
                path: 'https://raw.githubusercontent.com/uit2712/RNPlaySound/develop/sounds/Tropic%20-%20Anno%20Domini%20Beats.mp3',
                name: 'Tropic - Anno Domini Beats',
            },
        ],
        timeRate: 15,
        isLogStatus: false,
    });


    const renderButtonPlay = useCallback(() => {
        const playSound = () => {
            if (sound.status === 'play') {
                sound.pause();
            } else {
                sound.play();
            }
        };
        return (
            <Block
                marginHorizontal={25}
                row
                alignCenter
                justifyCenter
                width={150}
                space="between">
                <Button onPress={() => sound.decreaseTime()}>
                    <PreviousListenIcon color={colors.textDark} />
                </Button>
                <Button onPress={playSound}>
                    <IconView
                        component={'AntDesign'}
                        name={sound.status === 'play' ? 'pausecircle' : 'play'}
                        size={40}
                        color={colors.grey3}
                    />
                </Button>
                <Button onPress={() => sound.increaseTime()}>
                    <NextListenIcon color={colors.textDark} />
                </Button>
            </Block>
        );
    }, [colors.grey3, colors.textDark, sound]);


    const renderSlide = useCallback(() => {
        return (
            <Block marginVertical={20} row alignCenter justifyCenter >
                <Text>
                    {sound.currentTimeString}
                </Text>
                <Block marginHorizontal={10}>
                    <Progress.Bar unfilledColor={colors.grey16} color={colors.primary} progress={sound.currentTime > 0 ? (sound?.currentTime / sound?.duration) : 0} width={WINDOW_WIDTH * 0.55} height={10} />
                </Block>
                <Text>
                    {sound.durationString}
                </Text>
            </Block>

        )
    }, [sound.currentTime])

    const renderSpeech = useCallback(() => {
        return (
            <Block row>
                {
                    listSpeedValues.map((item, index) => (
                        <Button
                            key={index}
                            onPress={() => sound.setSpeed(item.value)}
                        >
                            <Block marginHorizontal={10} padding={5} radius={5} backgroundColor={sound.speed === item.value ? colors.primary : colors.grey14}>
                                <Text style={{
                                    color: sound.speed === item.value ? colors.white : colors.grey10
                                }}>{item.text}</Text>
                            </Block>
                        </Button>
                    ))
                }
            </Block>
        )
    }, [sound.speed])

    return (
        <Block flex backgroundColor={colors.text} alignCenter>
            <HeaderWithButton isBackHeader title={nameBook} />
            {renderImage()}
            {renderButtonPlay()}
            {renderSlide()}
            {renderSpeech()}

        </Block>
    );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
    image: {
        height: SCREEN_HEIGHT / 2.5,
        width: SCREEN_WIDTH - 50,
        borderRadius: normalize(15)('moderate'),
        alignSelf: 'center',
    },
}));
