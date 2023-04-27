### rn-credit-card-ui : 
A Credit Card React-Native UI component, it uses **react-native-flip-card** to flip the UI component smoothly and **creditcardutils** to validate the given credit card number.

If no type was detected (invalid number), no logo will be shown.

---

### Screens : 
![screens](https://raw.githubusercontent.com/BLemine/react-native-credit-card-animated-ui/master/assets/images/screens.jpg)

---

### Installation : 
```shell
npm i rn-credit-card-ui
# or if you're using yarn : 
yarn add rn-credit-card-ui
```
---
### Usage : 
```js
import CreditCardUI from "rn-credit-card-ui";

export default function Example(){
    return (
        <CreditCardUI 
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
        />
    )
}
```
You can also check a more complete example from [here](https://github.com/BLemine/react-native-credit-card-ui/blob/master/examples/Sample.js)

---

### Props : 
| Props      | Description | Type | Required      | Default |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| frontImage | The card front image | ImageSourcePropType | No | require("./assets/images/cardImg.png") |
| backImg | The card back image | ImageSourcePropType | No | require("./assets/images/cardImg.png") |
| textColor | The card elements color | string | No | "white" |
| cardWidth | The width of the card element | **string** or **number** | No | 85% |
| cardHeight | The height of the card element | **string** or **number** | No | 20% |
| isCardChipShown | To show the card chip element or not | boolean | No | true |
| bankLogo | Bank logo image | ImageSourcePropType | No | undefined |
| bankName | The bank name | string | No | "" |
| bankLogoContainerStyle | The style of the view wrapper of the bank's logo and name | ViewStyle | No | undefined |
| cardNumber | The credit card number | string | Yes | 4242424242424242 |
| expiryDate | The card expiry date | string | Yes | 11/27 |
| cvc | The cvc code | **string** or **number** | Yes | 123 |
| holderName | The credit card holder's name | string | Yes | Maria James |
| holderNameStyle | The style of the holder's name text element | TextStyle | No | undefined |
| isCardNumberShown | To show the card's number in full format or in secure format | boolean | Yes | true |
| holderGender | The card holder's gender status | string | Yes | "mr" |
| isHorizontalFlipEnabled | To enable the card element horizontal flip | boolean | No | true |
| isVerticalFlipEnabled | To enable the card element vertical flip | boolean | No | false |
| cardFrontContainerStyle | The style of font card | ViewStyle | No | undefined |
| cardFrontImageStyle | The style of font card image | ImageStyle | No | undefined |
| cardBackContainerStyle | The style of card's back side | ViewStyle | No | undefined |
| cardBackImageStyle | The style of card's back image | ImageStyle | No | undefined |
| cardNumberContainerStyle | The style of card's number view container | ViewStyle | No | undefined |
| cardNumberLabel | The card's number label | string | No | "" |
| cardNumberLabelStyle | The card's number label style | TextStyle | No | undefined |
| cardNumberStyle | The card's number style | TextStyle | No | undefined |
| cvcStyle | The CVC style | TextStyle | No | undefined |
| cvcLabel | The CVC label | string | No | "" |
| cvcLabelStyle | The CVC label style | TextStyle | No | undefined |
| dateContainerStyle | The card's expiry date view container style | ViewStyle | No | undefined |    
| dateLabel | The expiry date label | string | No | "EXP DATE" |
| dateLabelStyle | The expiry date label style | TextStyle | No | undefined |
| dateStyle | The expiry date style | TextStyle | No | undefined |
| bankNameStyle | The bank's name style | TextStyle | No | undefined |
| bankLogoStyle | The bank's logo style | ImageStyle | No | undefined |
| cardTypeLogoStyle | The card's type logo style | ImageStyle | No | undefined |
| cardChip | The card's chip element | ImageSourcePropType | No | undefined |
| cardChipStyle | The card's chip style | ImageStyle | No | undefined |
| blackBannerStyle | The card's back side black banner | ViewStyle | No | undefined |
| blackBannerStyle | The card's back side black banner | ViewStyle | No | undefined |
| whiteBannerStyle | The card's back side white banner | ViewStyle | No | undefined |
| onFlipStart | callback to execute when the flip event starts | (isFlipped: boolean) => void | No | ()=>void 0  |
| onFlipEnd | callback to execute when the flip event ends | (isFlipped: boolean) => void | No | ()=>void 0 |

---

### Contribution : 
Feel free to contribute to this project by sending your custom PR [here](https://github.com/BLemine/rn-credit-card-ui).