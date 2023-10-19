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
  const { chatId, tokenUser } = props.route.params;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const { userName, userPassword } = useSelector((state: RootReducer) => state.app);


  useEffect(() => {
    const getMessages = async () => {
      
      const messages = await axiosOperator({
        baseURL: endPoint,
        method: "get",
        router: routerMessageByChatId(chatId),
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      }, {})
    
      setMessages(messages.data);
      setLoading(false);
    }
  
    getMessages();
  }, []);


  const submitMessage = async () => {
    await axiosOperator({
      baseURL: endPoint,
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
      method: 'post',
      router: routerMessageByChatId(chatId)
    }, {
      message,
    });
  }

  if (loading) {
    return <Loading />
  }
  
  return (
    <View style={ style.container }>
      <Header
        type="contacts"
        chatName=""
      />
      <View style={ style.containerMessage }>
        {
          messages.map(({ message, user }) => {
            const { name, password } = user;

            return (
              <Message
                key={ message.id }
                message={ message }
                name={ name }
                isMyMessage={ name === userName && password === userPassword }
              />
            )
          })
        }
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
            submitMessage()
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
