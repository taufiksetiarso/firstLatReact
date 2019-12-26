/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {Ms} from './components/ms';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput, Button, TouchableOpacity,Linking
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer, createBottomTabNavigator, createDrawerNavigator, createMaterialTopTabNavigator
} from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stompcl from './components/Stompcl'
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, message: '' }
  };

  home = (msg) => {
    this.setState({ message: msg });
  }
  counter = () => {
    let a = this.state.count;

    
    this.setState({ count: a + 1 })
  }
  onePiece=()=>{
    Linking.openURL('http://www.mangacanblog.com/baca-komik-one_piece-952-953-bahasa-indonesia-one_piece-952-terbaru.html').catch((err) => console.error('An error occurred', err));
  }
  render() {
  
    return (
      <View style={{ flex: 1 }}>

        <TextInput
          style={{ borderWidth: 1, borderColor: 'white', borderRadius: 25, height: 40, padding: 2, fontSize: 13, backgroundColor: 'white', marginTop: 50, marginHorizontal: 20 }}
          value={this.state.count.toString()} />
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='reset' onPress={()=>this.setState({count:0})} />
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
          <TouchableOpacity onPress={this.counter} style={styles.myButton}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Tekan</Text></View></TouchableOpacity>
            
            <Text style={{ fontSize: 60 }}>{this.state.count === 0 ? '0' : this.state.count}</Text>
          </View>

          <View style={{ height: 54, flexDirection: 'row' }}>

            {/* <View style={{backgroundColor:'blue'  ,flex:1 ,justifyContent:'center',alignItems:'center'}}><TouchableOpacity style={{padding:30}} onPress={()=>this.home('home')}><Text>home</Text></TouchableOpacity></View>
    <View style={{backgroundColor:'purple',flex:1 ,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={()=>this.home('chat')}><Text>chat</Text></TouchableOpacity></View>
    <View style={{backgroundColor:'black' ,flex:1 ,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={()=>this.home('bill')}><Text>bill</Text></TouchableOpacity></View>
    <View style={{backgroundColor:'white' ,flex:1 ,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={()=>this.home('setting')}><Text>setting</Text></TouchableOpacity></View> */}
        <View style={{ flex: 1}}></View>
        <View style={{ flex: 1}}><Button title='one-piece' onPress={this.onePiece} /></View>
        <View style={{ flex: 1}}></View>
        
          </View>
        </View>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class FirstScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
        <Text>Settings!</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}> 
        <View style={{flex: 1,alignItems: 'center'}}><TouchableOpacity style={styles.pin}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><TextInput style={{height:20}}/></View></TouchableOpacity></View>
        <View style={{flex: 1,alignItems: 'center'}}><TouchableOpacity style={styles.pin}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Settings!</Text></View></TouchableOpacity></View>
        <View style={{flex: 1,alignItems: 'center'}}><TouchableOpacity style={styles.pin}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Settings!</Text></View></TouchableOpacity></View>
        <View style={{flex: 1,alignItems: 'center'}}><TouchableOpacity style={styles.pin}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Settings!</Text></View></TouchableOpacity></View>
        <View style={{flex: 1,alignItems: 'center'}}><TouchableOpacity style={styles.pin}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Settings!</Text></View></TouchableOpacity></View>
        <View style={{flex: 1,alignItems: 'center'}}><TouchableOpacity style={styles.pin}><View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Settings!</Text></View></TouchableOpacity></View>
        </View>
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color="grey" />
      )
    },
  },
  Chat: {
    screen: Stompcl,
    navigationOptions: {
      tabBarLabel: "Chat",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="comment" size={25} color="grey" />
      )
    },
  },
  Options: {
    screen: Ms,
    navigationOptions: {
      tabBarLabel: "Setting",
      tabBarIcon: (
        <Icon name="cog" size={25} color="grey" />
      )
    },
  },

}, {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
        alignContent: 'center',
        alignSelf: 'center',
      },
      style: {
        backgroundColor: 'white',
      },

      showIcon: true,
    }
  });
const App2 = createStackNavigator({
  Login: {
    screen: FirstScreen,
    navigationOptions: {
      header: null
    }
  },

  TabScreen: {
    screen: TabNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',

      },
      headerLeft: null,
      headerTintColor: '#FFFFFF',
      title: 'TabExample',
    },
  },
});
const Apps = createAppContainer(TabNavigator);

export default class App extends Component {



  render() {
    return (

      <View style={{ flex: 1 }}>
        <Apps />

      </View>
    );
  }

}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  myButton:{
    padding: 5,
    height: 200,
    width: 200,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(195, 125, 198)',

  },
  pin:{
    width:50,height:50,borderRadius:20,backgroundColor:'#f0f8ff'
  }
});


