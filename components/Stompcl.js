import React, { Component } from 'react';
import { TouchableOpacity, Button, Text, View, StyleSheet, TextInput, ImageBackground, Image, ScrollView } from 'react-native';
import io from "socket.io-client";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
export default class Stompcl extends Component {
  state = {
    result: '',
    chatMessage: {
      user: 'a00' + 1,
      msg: ''
    },

    chatMessages: []
  };
  componentDidMount() {
    console.ignoredYellowBox = ['Remote debugger'];
    this.socket = io("http://192.168.88.229:3000");
    this.socket.on("chat messages", msg => {
      console.log('message banyak', msg);
      if (msg.user === 'a001') {

      }
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
      console.log('cms', this.state.chatMessages);
    });
    this.socket.emit('new user', this.state.chatMessage);
  }
  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }
  ok() {
    this.socket.emit("ok", "d");
    this.socket.on("ok", msg => {
      console.log('ca', msg);
      this.setState({ result: msg });
    });
  }
  render() {

    const chatMessages = this.state.chatMessages.map(chatMessage => (
      console.log('lol', chatMessage)
      , <View key={chatMessage.msg} style={chatMessage.user === 'a001' ? { alignItems: 'flex-end', marginLeft: 16 } : { alignItems: 'flex-start', marginRight: 6 }}>
        <View style={styles.inputContainer}>
          <TextInput value={chatMessage.user}
            editable={false}
            style={chatMessage.user === 'a001' ?styles.inputUser2:styles.inputUser}
          />
          <TextInput
            style={styles.inputs}
            autoCorrect={false}
            value={chatMessage.msg}
            editable={false}
          />
        </View></View>
    ));

    return (
      <View style={styles.container}>

        <ImageBackground source={require('../assets/18.jpg')} style={{ width: '100%', height: '100%', }}>
          <ScrollView contentContainerStyle={styles.contentContainer}>

            {chatMessages}
            <Text>{this.state.result}</Text>
          </ScrollView>
          <View style={styles.bottom}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.inputContainer2}>

                <TextInput
                  style={styles.inputs2}
                  autoCorrect={false}
                  value={this.state.chatMessage}
                  onSubmitEditing={() => this.submitChatMessage()}
                  onChangeText={chatMessagea => {
                    this.setState({
                      chatMessage: {
                        user: 'a00' + 1,
                        msg: chatMessagea
                      }
                    });
                  }}
                />

              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  backgroundColor: '#8fbc8f',
                  borderRadius: 50,
                }}
                onPress={() => this.ok()}
              >
                <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  rotateImage: {
    height: '100%',
    width: '100%',
    transform: [{ rotate: '90deg' }], /* change the deg (degree of rotation) between 0deg, 360deg*/
  }, bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center'
  }, bottom2: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 200,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }, inputContainer2: {
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  inputs: {
    height: 45,

    borderBottomColor: '#FFFFFF',

    color: 'black',
  }, inputs2: {
    height: 45,
    marginLeft: 7,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: 'black',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 0,
    justifyContent: 'center'
  }, contentContainer: {
    paddingVertical: 20
  },
  inputUser2: {
    width: 40,
    height: 30,
    marginLeft: 15,
    padding: 0,
    color: 'green',

    justifyContent: 'center'
  },
  inputUser: {
    width: 40,
    height: 30,
    marginLeft: 15,
    padding: 0,
    color: 'red',

    justifyContent: 'center'
  }, contentContainer: {
    paddingVertical: 20
  },
});