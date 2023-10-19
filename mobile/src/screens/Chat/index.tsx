import { Button, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import Message from "../../components/Message";
import Loading from "../../components/Loading";
import { axiosOperator } from "../../services/server";
import { endPoint, routerMessageByChatId } from "../../Provider/app.server";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RootReducer from "../../types/RootReducer.type";
import style from "./style";

import { Feather } from '@expo/vector-icons';

function Chat(props) {
  const [message, setMessage] = useState("");

  const { userName, userPassword } = useSelector((state: RootReducer) => state.app);


  
  return (
    <View style={ style.container }>
      <Header
        type="contacts"
        chatName=""
      />
      <View style={ style.containerMessage }>
        <Message
          key={ 1 }
          message={ 'Message' }
          name={ 'Name' }
          isMyMessage={ false }
        />
      </View>

      <View style={ style.contentInputMessage }>
        <TextInput
          onChangeText={ (text) => setMessage(text) }
          value={ message }
          style={ style.inputMessage }
          placeholder="Digite sua mensagem"        
        />

        <TouchableOpacity
          style={ style.iconSend }
          onPress={ () => {
            setMessage("")
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
