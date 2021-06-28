/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from "react"
import {name as appName} from './app.json';
const CustomApp=()=><App cardHolderGender="mr" />

AppRegistry.registerComponent(appName, () => CustomApp);
