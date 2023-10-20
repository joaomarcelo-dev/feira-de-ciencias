import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { axiosOperator } from "../../services/server";
import { endPoint, routerMessageByChatId } from "../../Provider/app.server";
import { useSelector } from "react-redux";
import { Feather } from '@expo/vector-icons';
import Header from "../../components/Header";
import Message from "../../components/Message";
import RootReducer from "../../types/RootReducer.type";
import style from "./style";
import { cryptografic, decryptografic } from "../../utils/criptografic";

function Chat(props) {
  const scrollViewRef = useRef(null);

  const [sendMessage, setSendMessage] = useState("");
  const { userName, userPassword, message, codes } = useSelector((state: RootReducer) => state.app);
  const [allMessages, setAllMessages] = useState([]);
  const { chatId } = props.route.params;


  const submitMessage = async () => {
    const { data } = await axiosOperator({
      baseURL: endPoint,
      headers: {},
      method: 'post',
      router: '/message',
    }, {
      chatId,
      userName,
      userPassword,
      message: cryptografic(sendMessage, codes),
    });
  }

  useEffect(() => {
    if (message.length) {
      setAllMessages(message);
    }

    scrollToBottom();
  }, [message])

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }

  
  return (
    <View style={style.container}>
      <Header
        type="contacts"
        chatName=""
      />
      <View style={style.containerMessage}>
        <ScrollView
          ref={scrollViewRef}
        >
          {
            allMessages.map((message, index) => {
              return (
                <Message
                  key={ index }
                  message={ decryptografic(message.message, codes) }
                  name={ message.userName }
                  isMyMessage={ message.userName === userName && message.userPassword === userPassword }
                />
              )
            })

          }
        </ScrollView>
      </View>

      <View style={style.contentInputMessage}>
        <TextInput
          onFocus={scrollToBottom}
          onChangeText={(text) => setSendMessage(text)}
          value={sendMessage}
          style={style.inputMessage}
          placeholder="Digite sua mensagem"
        />

        <TouchableOpacity
          style={style.iconSend}
          onPress={() => {
            setSendMessage("");
            submitMessage();
          }}
        >
          <Feather
            name="send"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Chat;
