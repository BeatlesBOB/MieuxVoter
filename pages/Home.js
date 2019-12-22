import React, { Component } from 'react';
import { ScrollView, Image, Text, Button,View, SafeAreaView, StyleSheet } from 'react-native';
import Logo from "../assets/mieuxvoter_logo.png"
import Constants from 'expo-constants';


export default ({history}) => (

        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <Image source={Logo} />
                </View>
                <View>
                    <Button title="Voter depuis un QR code" onPress ={() => history.push("/Webview")}/>
                </View>
                <View>
                    <Button title="Creer une election" onPress ={() => history.push("/Webview")} />
                </View>
            </SafeAreaView>
        </ScrollView>
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
    },

  });
  