import { View } from "react-native";
import { useEffect } from "react";
import styles from "./style";
import ListChats from "../../components/ListChats";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import RootReducer from "../../types/RootReducer.type";

// Importação de funcionalidades
import '../../services/socket'
import { getCodes } from '../../utils/getCodes';


function Home() {
  const { chats, userName } = useSelector((state: RootReducer) => state.app);

  useEffect(() => {
    getCodes();
  }, [])

  return (
    <View style={ styles.container }>
      <Header
        type="chats"
        chatName={ userName }
      />
      <ListChats
        chats={ chats }
      />
    </View>
  )
}

export default Home;
