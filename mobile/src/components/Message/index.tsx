import { Text, View } from "react-native";
import style from "./style";

interface MessageProps {
  message: string;
  isMyMessage: boolean;
  name: string;
}

function Message({ isMyMessage, message, name }: MessageProps) {
  return (
    <View style={ [
      style.container,
      isMyMessage ? style.myMessage : style.othersMessage,
    ] }>
      
      {
        !isMyMessage &&
        <Text style={ style.name }>
          { name }
        </Text>
      }

      <Text
        style={ isMyMessage ? style.myMessageText : style.othersMessageText }
      >
        { message }
      </Text>
    </View> 
  )
}

export default Message;
