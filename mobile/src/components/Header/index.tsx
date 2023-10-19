import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import RootReducer from "../../types/RootReducer.type";

import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { addChats, addUser } from "../../Redux/actions/app.action";
import ButtonNavigate from "../ButtonNavigate";

interface HeaderProps {
  type: 'chats' | 'contacts' | 'settings';
  chatName: string
}

function Header(props: HeaderProps) {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const logOut = () => {
    dispatch(addUser({
      userName: '',
      tokenUser: '',
      userPassword: '',
    }));

    dispatch(
      addChats([])
    )
  }


  return (
    <View style={ style.container }>
      {
        props.type === 'chats' &&
        <View style={ style.content } >
          <TouchableOpacity
            onPress={logOut}
          >
            <SimpleLineIcons name="logout" size={20} color="black" />
          </TouchableOpacity>

          <Text style={ style.title }>
            Bem vindo {'\n'}
            { props.chatName }
          </Text>

          <MaterialIcons
            name="menu"
            size={24}
            color="black"
          />
        </View>
      }

      {
        props.type === 'contacts' &&
        <View style={ style.content }>
          <ButtonNavigate
            route="Home"
          >
            <MaterialCommunityIcons name="keyboard-return" size={24} color="black" />
          </ButtonNavigate>

          <Text style={ style.title }>
            { props.chatName }
          </Text>
        </View>
      }
    </View>
  );
}

export default Header;
