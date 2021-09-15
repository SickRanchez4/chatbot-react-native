import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import { dialogflowConfig } from '../env';

const botAvatar = require('../assets/images/chatbot.png');

const BOT = {
  _id: 2,
  name: 'Covidio',
  avatar: botAvatar
}

class Chatbot extends Component{
  state={
    messages : [{ _id: 1, text: 'Buenas! soy Covidio! \nTienes alguna consulta?', createdAt: new Date(), user: BOT }],
    id: 1,
    name: ''
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_SPANISH,
      dialogflowConfig.project_id,
    );
  }

  handleGoogleResponse(result){
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    this.sendBotResponse(text);
  }

  sendBotResponse(text){

    let msg = {
      _id: this.state.messages.length +1,
      text,
      createdAt: new Date(),
      user: BOT,
    };

    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, [msg]),
    }));
  }


  onSend(messages = []) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, messages)
    }))

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    )
  }


  onQuickReply(quickReplay) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, quickReplay)
    }))

    let message = quickReplay[0].value;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    )
  }

  render() {
    return(
      <View style={{flex:1, backgroundColor: '#fff'}} >
        <GiftedChat messages={this.state.messages}
        onSend={(message) => this.onSend(message)}
        onQuickReply={(quickReplay) => this.onQuickReply(quickReplay)}
        user={{ _id:1 }}
        />
      </View>
    );
  }
}

export default Chatbot;