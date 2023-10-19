import { Text, View } from "react-native";
import style from "./style";

function Loading() {
  return (
    <View style={ style.container }>
      <View>
        <Text style={ style.loadingText }>Carregando...</Text>
      </View>
    </View>
  )
}

export default Loading;

