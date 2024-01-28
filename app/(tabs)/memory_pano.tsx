import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { WebView } from "react-native-webview";

export default function MemoryPano() {
  const html: string = `
    <!doctype html>
    <!--
    @license
    Copyright 2019 Google LLC. All Rights Reserved.
    SPDX-License-Identifier: Apache-2.0
    -->
    <html>
      <head>
        <title>Street View Containers</title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

        <link rel="stylesheet" type="text/css" href="./style.css" />
        <script type="module" src="./index.ts"></script>
      </head>
      <body>
        <p>hello world!</p>
        <div id="street-view"></div>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initialize&v=weekly"
          defer
        ></script>
      </body>
    </html>
  `

  const html2 = `
  <!doctype html>
    <html>
      <head>
        <title>Street View Containers</title>
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <script type="module" src="./index.ts"></script>
      </head>
      <body>
        <div id="street-view">Hello!</div>
        <p>Hello world!</p>
      </body>
    </html>
  `
  return (
    <>
      <WebView 
        source={require("./pano.html")}
      />
      <>
        <Text>Hello</Text>
      </>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  streetView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
