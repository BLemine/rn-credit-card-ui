import React from "react";
import CreditCardUI from "../src/components/CreditCardUI"
export default () => <CreditCardUI
    cardNumber="4242424242424242"
    cvc="123"
    holderGender="miss"
    holderName="Maria James"
    expiryDate="11/23"
    bankName={"Bank of Sky"}
    bankLogo={{
        uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg"
    }}
    bankLogoStyle={{
        borderRadius:100
    }}
    isCardNumberShown={false}
    isHorizontalFlipEnabled={true}
    isVerticalFlipEnabled={false}
    dateLabel="VALID"
/**
*  Not required
*/
// frontImg={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg" }} // or require("")
// or 
//frontImg={require("./assets/images/earth.jpg")}
// backImg={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg" }}
// textColor="yellow"
// secureCardNbr={true}
/>