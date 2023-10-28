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
import MessageType from "../../types/Message.type";

function Chat(props) {
  const scrollViewRef = useRef(null);

  const [sendMessage, setSendMessage] = useState("");
  const { codes, chats, userId, tokenUser } = useSelector((state: RootReducer) => state.app);

  const [allMessages, setAllMessages] = useState<MessageType[]>([]);
  const { chatId } = props.route.params;


  const submitMessage = async () => {
    const { data } = await axiosOperator({
      baseURL: endPoint,
      headers: {
        Authorization: `Bearer ${tokenUser}`
      },
      method: 'post',
      router: routerMessageByChatId(chatId),
    }, {
      message: cryptografic(sendMessage, codes),
      messageNoCryp: sendMessage,
    });
  }

  useEffect(() => {
    const messages = chats.find(chat => chat.id === chatId).Message;
    
    
    setAllMessages(messages);
    scrollToBottom();
  }, [chats])

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
                  name={ message.user.name }
                  isMyMessage={ userId === message.userId }
                  dateTime={ message.createdAt }
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
          style={
            sendMessage.length
            ? style.iconSend
            : style.iconSendDisabled
          }
          onPress={() => {
            setSendMessage("");
            submitMessage();
          }}

          disabled={!sendMessage.length}
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
