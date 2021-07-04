### React-Native-Credit-Card-UI : 
A Credit Card React-Native UI component, it uses **react-native-flip-card** to flip the UI component smoothly and **creditcardutils** to validate the given credit card.

---

### Screens : 
![screens](assets/images/screens.PNG)

---

### Installation : 
```shell
npm i react-native-credit-card-ui
# or if you're using yarn : 
yarn add react-native-credit-card-ui 
```
---
### Usage : 
```js
import CreditCardUI from "react-native-credi-card-ui";

export default function Example(){
    return (
        <CreditCardUI 
            creditCardNumber="4242424242424242"
            cardCVC="123"
            cardHolderGender="miss"
            cardHolderName="Maria James"
            cardExpiryDate="11/23"
            frontImg={{uri:""}} // or require("")
            backImg={{uri:""}}
            textColor="yellow"
            secureCardNbr={true}
        />
    )
}
```
---

### Props : 
| Props      | Description | Required      | Default |
| ----------- | ----------- | ----------- | ----------- |
| bankName      | The credit card bank name       | No | BANK OF SOMETHING |
| bankLogo   | In case you wanna add the credit card bank logo (image source)       |No|null|
|hideCardChip|If it's true, the default cedit card chip will be hidden, of type **bool**|No|false|
|creditCardNumber|The credit card number, of type **String**|Yes|"4242424242424242"|
|cardCVC|Credit card CVC|Yes|123|
|flipHorizontal|To make the card view flip horizontally|No|true|
|flipVertical|To make the card view flip vertically|No|false|
|onFlipEnd|The action to execute once the flip ends|No|()=>void 0|
|onFlipStart|The action to execute when the flip starts|No|()=>void 0|
|cardHolderGender|The credit card holder's gender, of type **String** has to be one of "mr","miss","mrs"|No|"mr"|
|cardHolderName|Credit card holder's name|Yes|"Tomas Edison"|
|cardExpiryDate|Credit Card Expiry Data, of type **String** |Yes|"02/24"|
|frontImg|Image source to be set as the front side image of the card view, has to be : **{uri:"your_url"}** or **require("local_path")** |No|require("./assets/images/cardImg.png")|
|backImg|Image source to be set as the back side image of the card view, has to be : **{uri:"your_url"}** or **require("local_path")**|No|require("./assets/images/cardImg.png")|
|textColor|The color of the printed text on the card view, of type **String**|No|"white"|
|cardWidth|The card view width|No|Dimensions.get('window').width - 20|
|cardHeight|The card view height|No|200|
|**secureCardNbr**|This props is quite important, it enables securely hiding the credit card sensitive information such as the card's number and CVC, if it's true only the last four digits of the card's number will be displayed and others as stars "*", same as CVC with the one last digit. of type **bool** |No|false|

---

### Contribution : 
Feel free to contribute to this project by sending your custom PR.