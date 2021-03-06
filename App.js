import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/loginScreen';
import NotificationScreen from './screens/NotificationScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

import firebase from 'firebase';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6h6fKn1ItNujMTKxTdTBLtWGOOcszJCM",
  authDomain: "myapp-70c33.firebaseapp.com",
  projectId: "myapp-70c33",
  storageBucket: "myapp-70c33.appspot.com",
  messagingSenderId: "912054088613",
  appId: "1:912054088613:web:9692ba1ee8a0981931ae4c",
  measurementId: "G-8H2ELMC64J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Post: PostScreen,
  Profile: ProfileScreen,
  Notification: NotificationScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
)