import React, { Component } from 'react'
import {ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import firebase from 'firebase'

export default class LoadingScreen extends Component {
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user=> {
            this.props.navigation.navigate( user? "App": "Auth")
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Loading </Text>
                <ActivityIndicator size="large" color="red"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
})
