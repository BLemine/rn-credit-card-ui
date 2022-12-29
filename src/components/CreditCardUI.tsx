import React, { CSSProperties } from "react";
import {
    View,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    ImageSourcePropType,
} from "react-native"
import FlipCard from 'react-native-flip-card'
const creditcardutils = require('creditcardutils');
import PropTypes from 'prop-types';
import { styles } from "./styles";
import { creditCardTypes } from "../../constants";

enum Gender {
    mr = "mr",
    mrs = "mrs",
    miss = "miss"
}
type CreditCardPropsType = {
    frontImg: ImageSourcePropType;
    backImg: ImageSourcePropType;
    textColor?: string;
    cardWidth: string | number;
    cardHeight: string | number;
    hideCardChip?: boolean;
    bankLogo: ImageSourcePropType;
    bankName: string;
    creditCardNumber: string;
    cardExpiryDate: string;
    cardCVC: number | string;
    cardHolderName: string;
    secureCardNbr: boolean;
    cardHolderGender: Gender;

    flipHorizontal: boolean;
    flipVertical: boolean;
    onFlipStart: (isFlipped: boolean) => void;
    onFlipEnd: (isFlipped: boolean) => void;
}
export default function CreditCardUI(props: CreditCardPropsType) {
    // const {}
    const [frontImg, setFrontImg] = React.useState(props.frontImg);
    const [backImg, setBackImg] = React.useState(props.backImg);
    const [textColor, setTextStyle] = React.useState(props.textColor);
    const [cardStyle, setCardStyle] = React.useState({
        width: props.cardWidth,
        height: props.cardHeight
    });
    const [hideCardChip, setHideCardChip] = React.useState(props.hideCardChip);
    const [bankLogo, setBankLogo] = React.useState(props.bankLogo);
    const [card, setCard] = React.useState({
        bankName: props.bankName,
        cardNbr: props.creditCardNumber,
        cardType: "",
        cardDate: props.cardExpiryDate,
        cardCVC: props.cardCVC,
        cardHolderName: props.cardHolderName,
        cardHolderGender: "",
        secureCardNbr: props.secureCardNbr
    })

    const creditCardLogo = () => creditCardTypes.find((el) => el.type === creditcardutils.parseCardType(card.cardNbr))

    const validateCreditCardHolderGender = () => {
        if (props.cardHolderGender !== null) {
            if (["mr", "miss", "mrs"].includes(props.cardHolderGender)) {
                setCard({ ...card, cardHolderGender: props.cardHolderGender.toUpperCase() })
            } else {

            }
        } else {

        }
    }
    React.useEffect(() => {
        validateCreditCardHolderGender()
    }, [])
    return (
        <View style={styles.container}>
            <FlipCard
                flipHorizontal={props.flipHorizontal}
                flipVertical={props.flipVertical}
                onFlipStart={props.onFlipStart}
                onFlipEnd={props.onFlipEnd}
            >
                {/* Face Side */}

                <ImageBackground source={frontImg} style={[styles.cardContainer, { width: cardStyle.width, height: cardStyle.height }]} imageStyle={{ borderRadius: 10 }}>
                    {bankLogo == null ?
                        <Text style={[styles.bankName, { color: textColor }]}>{card.bankName}</Text>
                        :
                        <Image source={bankLogo} style={styles.bankLogo} />
                    }
                    {!hideCardChip && <Image source={require("../../assets/images/ce_chip.png")} style={styles.cardChip} />}
                    <Text style={[styles.creditCardNumberText, { color: textColor }]}>
                        {!card.secureCardNbr ? creditcardutils.formatCardNumber(card.cardNbr) : "************" + card.cardNbr.substring(12, 16)}
                    </Text>
                    <Text style={[styles.creditCardDate, { color: textColor }]}>VALID {card.cardDate}</Text>
                    <Text style={[styles.creditCardHolderNameText, { color: textColor }]}>{card.cardHolderGender + " " + card.cardHolderName.toUpperCase()}</Text>
                    {creditCardLogo() !== null && <Image source={{ uri: creditCardLogo()?.uri }} style={styles.creditCardTypeLogo} />}
                </ImageBackground>
                {/* Back Side */}

                <ImageBackground source={backImg} style={[styles.cardContainer, { alignContent: "center", justifyContent: "center", width: cardStyle.width, height: cardStyle.height }]} imageStyle={{ borderRadius: 10 }}>
                    <View style={styles.blackBanner} />
                    <View style={styles.whiteBanner}>
                        <Text style={styles.cvcText}>{card.secureCardNbr ? "**" + card.cardCVC.toString().substring(1, 2) : card.cardCVC}</Text>
                    </View>
                </ImageBackground>
            </FlipCard>
        </View>

    )
}



CreditCardUI.propTypes = {
    bankName: PropTypes.string,
    bankLogo: PropTypes.object,

    hideCardChip: PropTypes.bool,

    creditCardNumber: PropTypes.string,
    cardCVC: PropTypes.string,
    cardHolderName: PropTypes.string,
    cardExpiryDate: PropTypes.string,
    frontImg: PropTypes.any,
    backImg: PropTypes.any,
    textColor: PropTypes.string,
    cardWidth: PropTypes.any,
    cardHeight: PropTypes.any,

    onFlipEnd: PropTypes.func,
    onFlipStart: PropTypes.func,
    flipHorizontal: PropTypes.bool,
    flipVertical: PropTypes.bool,

    secureCardNbr: PropTypes.bool
}

CreditCardUI.defaultProps = {
    bankName: "BANK OF SOMETHING",
    bankLogo: null,

    hideCardChip: false,

    creditCardNumber: "4242424242424242",
    cardCVC: "123",
    flipHorizontal: true,
    flipVertical: false,
    onFlipEnd: () => void 0,
    onFlipStart: () => void 0,
    cardHolderGender: "mr",
    cardHolderName: "Tomas Edison",
    cardExpiryDate: "02/24",
    frontImg: require("../../assets/images/cardImg.png"),
    backImg: require("../../assets/images/cardImg.png"),
    textColor: "white",
    cardWidth: Dimensions.get('window').width - 20,
    cardHeight: 200,

    secureCardNbr: false
}