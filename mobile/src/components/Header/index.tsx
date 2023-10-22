import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ButtonNavigate from "../ButtonNavigate";
import resetStore from "../../utils/resetStore";

interface HeaderProps {
  type: 'chats' | 'contacts' | 'settings';
  chatName: string
}

function Header(props: HeaderProps) {
  const logOut = () => {
    resetStore();
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
