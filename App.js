import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./pages/Home"
import Webview from "./pages/WebView"
import QRcode from "./pages/QRcode"

import {NativeRouter,Switch,Route} from 'react-router-native'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact  path="/" component={Home}/>
          <Route path="/Webview" component={Webview}/>
          <Route path="/QRcode" component={QRcode}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
