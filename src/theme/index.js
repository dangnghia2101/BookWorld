import { Platform } from 'react-native';

export const theme = {
    colors: {
        text: '#242424',
        background: '#f5f5f5',
        orange: '#FE930F',
        orangeBol: '#FF6500',
        lightGray: '#A5A5A5',
        gray: '#424242',
        smoke: '#E6E6E6',
        white: '#ffffff',
        black: '#000000',
        placeholder: '#707070',
        blue: '#0d5cb6',
        red: '#E83625',
        gradient: ['#F04831', '#E73222', '#D9100C'],
        green: '#088A08',
        lightGreen: '#29bb89',
        yellow: '#FFDF00',
        dark: '#00000060',
        dark1: '#261E27',
        dark2: '#06001a',
        bg_opacity: '#00000020',
        gray2: '#9A9A9A',
        darkRed: '#BF0404',
        darkBlue: '#304FDF',
        lightRed: '#FA634D',
        lightGreen1: '#00CA2C',
        btnColor: ['#002366', '#002366', '#002366'],
        lightBlue: '#3E79F7',
        orangeTranparent: 'rgba(245, 155,0,0.2)',
        redTranparent: '#e8a5a5',
        gray3: '#E0E0E0',
        gray4: '#F6F6F6',
        backgroundOpacity: 'rgba(0, 0, 0, 0.4)',
        blueTitle: '#092C4C',
        orange2: '#F95B00',
        darkGray: '#F1F1F1',
        creamRed: '#D45555',
        darkPurple: '#331A45',
        buttomGroud: 'rgba(212, 85, 85, 0.2)',
        listColor: 'rgba(243, 243, 243, 1)',
    },

    dark: {
        success: '#00E096',
        info: '#0095FF',
        warning: '#FFB432',
        danger: '#f44336',
        basic: 'rgb(151, 153, 169)',
        transparent: '#00000000',
        default: 'rgb(244,245,249)',
        gray: '#6A84A0', // gray12
        mirage: '#181E25',
        // themes
        background: '#05222C',
        text: '#FFFFFF',
        primary: '#35C4BA',
        disabled: '#8FA2B7',
        white: '#FFFFFF',
        black: '#000000',
        secondary: '#15313D',
        green: '#76E268',
        greentheme: '#0AD8BC',
        black_transparent: 'rgba(0,0,0,0.4)',
        itemAsset: '#15313D',
        backgroundMainScreen: '#05222C',
        // border: 'rgba(143,162,183,0.1)',
        group: 'rgba(143,162,183,0.1)',
        graytheme: '#E9ECF1',
        statusBar: '#0AD8BC',

        //new
        separator: '#EAEAEA',
        confirmed: '#4484FF',
        pending: '#FFB432',
        failed: '#F15223',
        border: '#C4C4C4',
        input: '#E7E7E7',
        backgroundList: '#F7F7F7',
        search: '#F1F1F1',
        borderPortal: '#CACACA',
        redPastel: '#FF738D',
        bluePastel: '#55DDD3',
        yellowPastel: '#EDDB39',
        greenPastel: '#2DE48C',
        violetPastel: '#DC93FF',
        grayPastel: '#707070',
        backgroundIcon: '#F2F6FA',
        grayTextWeb: '#BABABA',
        keypadNormalBackground: '#35C4BA1A',
    },
    light: {
        success: '#00E096',
        info: '#0095FF',
        warning: '#FFB432',
        danger: '#f44336',
        basic: 'rgb(151, 153, 169)',
        transparent: '#00000000',
        default: 'rgb(244,245,249)',
        gray: '#6A84A0', // gray12
        mirage: '#181E25',
        // themes
        background: '#FFFFFF',
        text: '#000000',
        primary: '#35C4BA',
        disabled: '#8FA2B7',
        white: '#FFFFFF',
        black: '#000000',
        secondary: 'rgba(143,162,183,0.2)',
        green: '#76E268',
        greentheme: '#0AD8BC',
        black_transparent: 'rgba(0,0,0,0.4)',
        itemAsset: '#FFFFFF',
        backgroundMainScreen: '#F8F8F8',
        // border: 'rgba(143,162,183,0.1)',
        group: '#8FA2B7',
        graytheme: '#E9ECF1',
        statusBar: '#0AD8BC',

        //new
        separator: '#EAEAEA',
        confirmed: '#4484FF',
        pending: '#FFB432',
        failed: '#F15223',
        border: '#C4C4C4',
        input: '#E7E7E7',
        backgroundList: '#F7F7F7',
        search: '#F1F1F1',
        borderPortal: '#CACACA',
        redPastel: '#FF738D',
        bluePastel: '#55DDD3',
        yellowPastel: '#EDDB39',
        greenPastel: '#2DE48C',
        violetPastel: '#DC93FF',
        grayPastel: '#707070',
        backgroundIcon: '#F2F6FA',
        grayTextWeb: '#BABABA',
        keypadNormalBackground: '#35C4BA1A',
    },

    fonts: {
        fontWeight: {
            heavy: '700',
            bold: 'bold',
            semibold: Platform.OS === 'android' ? 'bold' : '600',
            regular: 'normal',
            light: '300',
        },
        fontFamily: {
            bold1: 'Lato-Bold',
            medium1: 'Lato-Medium',
            regular1: 'Lato-Regular',
            semibold1: 'Lato-Semibold',
        },
    },
};
