import React from "react";
import {
    View,
    Text,
    ImageBackground,
    Image
} from "react-native"
import FlipCard from 'react-native-flip-card'
import { styles } from "./styles";
import { colors, creditCardTypes } from "../../constants";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { CreditCardPropsType } from "../types";
const creditcardutils = require('creditcardutils');

const initProps = {
    bankName: "BANK OF SOMETHING",
    // bankLogo: require(""),

    cardNumber: "4242424242424242",
    cvc: "123",
    isHorizontalFlipEnabled: true,
    isVerticalFlipEnabled: false,
    holderGender: "mr",
    holderName: "Tomas Edison",
    expiryDate: "02/24",
    frontImg: require("../../assets/images/cardImg.png"),
    backImg: require("../../assets/images/cardImg.png"),
    textColor: "white",
    cardWidth: widthPercentageToDP(85),
    cardHeight: heightPercentageToDP(22),

    isCardNumberShown: true,
    isCardChipShown: true,

    dateLabel: "VALID",

    onFlipEnd: () => void 0,
    onFlipStart: () => void 0,
}
export default function CreditCardUI(props: CreditCardPropsType) {
    const {
        frontImg = initProps.backImg,
        backImg = initProps.backImg,

        cardFrontContainerStyle,
        cardFrontImageStyle,
        cardBackContainerStyle,
        cardBackImageStyle,

        textColor = colors.white,
        holderGender,
        cardNumber,
        holderName,
        expiryDate,
        cvc,

        bankLogoContainerStyle,
        bankName,
        bankNameStyle,
        bankLogoStyle,

        cardWidth = initProps.cardWidth,
        cardHeight = initProps.cardHeight,
        bankLogo,

        dateContainerStyle,
        dateLabel = initProps.dateLabel,
        dateLabelStyle,
        dateStyle,

        cardNumberContainerStyle,
        cardNumberLabel,
        cardNumberLabelStyle,
        cardNumberStyle,

        cardChip,
        cardChipStyle,

        cardTypeLogoStyle,

        blackBannerStyle,
        whiteBannerStyle,

        cvcLabel,
        cvcLabelStyle,
        cvcStyle,

        holderNameStyle,

        isCardChipShown = initProps.isCardChipShown,
        isCardNumberShown = initProps.isCardNumberShown,
        isHorizontalFlipEnabled = initProps.isHorizontalFlipEnabled,
        isVerticalFlipEnabled = initProps.isVerticalFlipEnabled,
        onFlipStart = initProps.onFlipStart,
        onFlipEnd = initProps.onFlipEnd
    } = props;
    const [holderGenderStatus, setHolderGenderStatus] = React.useState<string>("");

    const creditCardLogo = () => creditCardTypes.find((el) => el.type === creditcardutils.parseCardType(cardNumber))

    const validateCreditCardHolderGender = () => {
        if (holderGender !== null)
            if (["mr", "miss", "mrs"].includes(holderGender))
                setHolderGenderStatus(holderGender.toUpperCase())
    }
    React.useEffect(() => {
        validateCreditCardHolderGender()
    }, [])
    return (
        <View style={styles.container}>
            <FlipCard
                flipHorizontal={isHorizontalFlipEnabled}
                flipVertical={isVerticalFlipEnabled}
                onFlipStart={onFlipStart}
                onFlipEnd={onFlipEnd}
            >
                {/* Face Side */}
                <ImageBackground
                    source={frontImg}
                    style={[styles.cardContainer, { width: cardWidth, height: cardHeight }, cardFrontContainerStyle]}
                    imageStyle={[{ borderRadius: 10 }, cardFrontImageStyle]}
                >
                    <View style={[styles.bankLogoContainer, bankLogoContainerStyle]}>
                        {bankLogo !== undefined ?
                            <Image source={bankLogo} style={[styles.bankLogo, bankLogoStyle]} />
                            :
                            <></>
                        }
                        {bankName !== undefined ?
                            <Text style={[styles.bankName, { color: textColor }, bankNameStyle]}>
                                {bankName}
                            </Text>
                            : <></>
                        }
                    </View>
                    {isCardChipShown ?
                        <Image source={cardChip ? cardChip : require("../../assets/images/ce_chip.png")} style={[styles.cardChip, cardChipStyle]} />
                        :
                        <></>
                    }
                    <View style={[styles.cardNumberContainer, cardNumberContainerStyle]}>
                        <Text style={[styles.cardNumberLabel, cardNumberLabelStyle]}>
                            {cardNumberLabel}
                        </Text>
                        <Text style={[styles.creditCardNumberText, { color: textColor }, cardNumberStyle]}>
                            {isCardNumberShown ?
                                creditcardutils.formatCardNumber(cardNumber)
                                :
                                "**** **** **** " + cardNumber.substring(12, cardNumber.length)
                            }
                        </Text>
                    </View>

                    <View style={[styles.expiryDateContainer, dateContainerStyle]}>
                        <Text style={[{
                            color: textColor,
                        }, styles.expiryDateLabel, dateLabelStyle]}>
                            {dateLabel}
                        </Text>
                        <Text style={[{ color: textColor }, dateStyle]}>
                            {expiryDate}
                        </Text>
                    </View>

                    <Text style={[styles.creditCardHolderNameText, { color: textColor }, holderNameStyle]}>
                        {holderGenderStatus + " " + holderName.toUpperCase()}
                    </Text>
                    {creditCardLogo() !== null && <Image
                        source={{ uri: creditCardLogo()?.uri }}
                        style={[styles.creditCardTypeLogo, cardTypeLogoStyle]}
                    />}
                </ImageBackground>
                {/* Back Side */}
                <ImageBackground
                    source={backImg}
                    style={[
                        styles.cardContainer,
                        {
                            width: cardWidth,
                            height: cardHeight
                        },
                        cardBackContainerStyle
                    ]}
                    imageStyle={[{ borderRadius: 10 }, cardBackImageStyle]}
                >
                    <View style={[styles.blackBanner, blackBannerStyle]} />
                    <View style={[styles.whiteBanner, whiteBannerStyle]}>
                        <Text style={[styles.cvcText, cvcStyle]}>
                            {isCardNumberShown ?
                                cvc :
                                "**" + cvc.toString().substring(1, 2)
                            }
                        </Text>
                    </View>
                </ImageBackground>
            </FlipCard>
        </View>

    )
}
