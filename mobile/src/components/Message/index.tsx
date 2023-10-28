import { Text, View } from "react-native";
import style from "./style";

interface MessageProps {
  message: string;
  isMyMessage: boolean;
  name: string;
  dateTime: string;
}

function Message({ isMyMessage, message, name, dateTime }: MessageProps) {

  const time = new Date(dateTime);

  const hours = time.getHours();
  const minutes = time.getMinutes();

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
        style={ [isMyMessage ? style.myMessageText : style.othersMessageText] }
      >
        { message }
      </Text>

      <Text style={ isMyMessage ? style.myHour : style.othersHour }>
        { `${hours}:${minutes}` }
      </Text>
    </View> 
  )
}

export default Message;
