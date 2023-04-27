import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        height: 240,
        alignItems: "center"
    },
    cardContainer: {
        marginTop: 10,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey"
    },
    blackBanner: {
        width: "100%",
        height: 40,
        backgroundColor: "black",
        position: "absolute",
        top: 20
    },
    whiteBanner: {
        width: "100%",
        height: 30,
        backgroundColor: "white",
        justifyContent: "center"
    },
    cvcText: {
        fontWeight: "bold",
        textAlign: "center",
        position: "absolute",
        right: 20
    },
    creditCardNumberText: {
        // marginTop: "25%",
        fontSize: 17
    },
    creditCardHolderNameText: {
        position: "absolute",
        bottom: 15,
        left: 15
    },
    bankLogo: {
        width: 60,
        height: 40
    },
    bankLogoContainer: {
        position: "absolute",
        top: 20,
        right: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    bankName: {
        fontWeight: "bold"
    },
    creditCardTypeLogo: {
        position: "absolute",
        bottom: 15,
        right: 15,
        width: 78,
        height: 48
    },
    cardNumberContainer: {
        marginTop: "20%"
    },
    cardNumberLabel: {
        color: "white"
    },
    expiryDateContainer: {
        marginTop: 10,
        flexDirection: "row"
    },
    expiryDateLabel: {
        marginRight: 10
    },
    cardChip: {
        position: "absolute",
        top: 40,
        left: 10,
        width: 60,
        height: 40
    }
})