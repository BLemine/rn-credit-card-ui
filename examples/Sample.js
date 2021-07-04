import React from "react";
import CreditCardUI from "../src/components/CreditCardUI"
export default () => <CreditCardUI
    creditCardNumber="4242424242424242"
    cardCVC="123"
    cardHolderGender="miss"
    cardHolderName="Maria James"
    cardExpiryDate="11/23"
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