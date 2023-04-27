import {
    ImageSourcePropType,
    ViewStyle,
    ImageStyle,
    TextStyle,
} from "react-native";

export type CreditCardPropsType = {
    frontImg?: ImageSourcePropType;
    backImg?: ImageSourcePropType;
    textColor?: string;
    cardWidth?: string | number;
    cardHeight?: string | number;
    isCardChipShown?: boolean;
    bankLogoContainerStyle?: ViewStyle;
    bankLogo?: ImageSourcePropType;
    bankName?: string;
    cardNumber: string;
    expiryDate: string;
    cvc: number | string;
    holderName: string;
    holderNameStyle?: TextStyle;
    isCardNumberShown: boolean;
    holderGender: string;
    isHorizontalFlipEnabled?: boolean;
    isVerticalFlipEnabled?: boolean;

    cardFrontContainerStyle?: ViewStyle;
    cardFrontImageStyle?: ImageStyle;
    cardBackContainerStyle?: ViewStyle;
    cardBackImageStyle?: ImageStyle;

    cardNumberContainerStyle?: ViewStyle;
    cardNumberLabel?: string;
    cardNumberLabelStyle?: TextStyle;
    cardNumberStyle?: TextStyle;

    cvcLabel?: string;
    cvcLabelStyle?: TextStyle;
    cvcStyle?: TextStyle;

    dateContainerStyle?: ViewStyle;
    dateLabel?: string;
    dateLabelStyle?: TextStyle;
    dateStyle?: TextStyle;

    bankNameStyle?: TextStyle;
    bankLogoStyle?: ImageStyle;

    cardTypeLogoStyle?: ImageStyle;

    cardChip?: ImageSourcePropType;
    cardChipStyle?: ImageStyle;

    blackBannerStyle?: ViewStyle,
    whiteBannerStyle?: ViewStyle;

    onFlipStart?: (isFlipped: boolean) => void;
    onFlipEnd?: (isFlipped: boolean) => void;
}