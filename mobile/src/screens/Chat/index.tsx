// import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
// import Header from "../../components/Header";
// import Message from "../../components/Message";
// import Loading from "../../components/Loading";
// import { axiosOperator } from "../../services/server";
// import { endPoint, routerMessageByChatId } from "../../Provider/app.server";
// import { useEffect, useState, useRef } from "react";
// import { useSelector } from "react-redux";
// import RootReducer from "../../types/RootReducer.type";
// import style from "./style";

// import { Feather } from '@expo/vector-icons';

// function Chat(props) {
//   const [sendMessage, setSendMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const scrollViewRef = useRef();

//   const { tokenUser, idUser } = useSelector((state: RootReducer) => state.app);

//   const { chatId } = props.route.params;

//   const getMessageByChatId = async () => {
//     const response = await axiosOperator({
//       baseURL: endPoint,
//       headers: {
//         Authorization: `Bearer ${tokenUser}`
//       },
//       method: 'get',
//       router: routerMessageByChatId(chatId),
//     }, {});

//     setMessages(response.data);
//   }

//   useEffect(() => {
//     getMessageByChatId();
//     scrollViewRef.current.scrollToEnd();
//   }, [messages])
  
//   const sendMessageByChatId = async () => {
//     const response = await axiosOperator({
//       baseURL: endPoint,
//       headers: {
//         Authorization: `Bearer ${tokenUser}`
//       },
//       method: 'post',
//       router: routerMessageByChatId(chatId),
//     }, {
//       message: sendMessage,
//     });
//   }

  
//   return (
//     <View style={ style.container }>
//       <Header
//         type="contacts"
//         chatName=""
//       />
//       <View style={ style.containerMessage }>
//         <ScrollView ref={ scrollViewRef }>
//           {
//             messages.map(({ id, message, user: { name, id: userId } }) => {
//               return (
//                 <Message
//                   key={ id }
//                   message={ message }
//                   name={ name }
//                   isMyMessage={ userId === idUser }
//                 />
//               );
//             })
//           }

//         </ScrollView>
//       </View>

//       <View style={ style.contentInputMessage }>
//         <TextInput
//           onChangeText={ (text) => setSendMessage(text) }
//           value={ sendMessage }
//           style={ style.inputMessage }
//           placeholder="Digite sua mensagem"        
//         />

//         <TouchableOpacity
//           style={ style.iconSend }
//           onPress={ () => {
//             setSendMessage("")
//             sendMessageByChatId()
//           }}
//         >
//           <Feather
//             name="send"
//             size={24}
//             color="black"
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default Chat;


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

function Chat(props) {
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();
  const { tokenUser, idUser } = useSelector((state: RootReducer) => state.app);
  const { chatId } = props.route.params;

  const getMessageByChatId = async () => {
    const response = await axiosOperator({
      baseURL: endPoint,
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
      method: 'get',
      router: routerMessageByChatId(chatId),
    }, {});

    setMessages(response.data);
  }

  useEffect(() => {
    getMessageByChatId();
  }, [messages]);

  const sendMessageByChatId = async () => {
    const response = await axiosOperator({
      baseURL: endPoint,
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
      method: 'post',
      router: routerMessageByChatId(chatId),
    }, {
      message: sendMessage,
    });

    setSendMessage("");
    scrollToBottom(); // Após enviar a mensagem, role para baixo
  }

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
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
          onContentSizeChange={() => scrollToBottom()} // Rolagem automática para baixo
        >
          {messages.map(({ id, message, user: { name, id: userId } }) => (
            <Message
              key={id}
              message={message}
              name={name}
              isMyMessage={userId === idUser}
            />
          ))}
        </ScrollView>
      </View>

      <View style={style.contentInputMessage}>
        <TextInput
          onChangeText={(text) => setSendMessage(text)}
          value={sendMessage}
          style={style.inputMessage}
          placeholder="Digite sua mensagem"
        />

        <TouchableOpacity
          style={style.iconSend}
          onPress={() => {
            setSendMessage("");
            sendMessageByChatId();
            scrollToBottom();
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
