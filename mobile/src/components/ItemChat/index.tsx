import { Image, Text, View } from "react-native"
import style from "./style";

interface ItemChatProps {
  chatName: string;
  thumbnail: string;
  members: number;
}

const imageDefault = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

function ItemChat({ chatName, thumbnail, members }: ItemChatProps) {
  return (
    <View style={ style.content }>
      <Image
        source={
          {
            uri: thumbnail ? thumbnail : imageDefault,
          }
        }
        style={ style.image }
      />
      <View>
        <Text style={ style.title }>{ chatName }</Text>

        <View>
          <Text>Membros: { members }</Text>
        </View>
      </View>
    </View>
  )
}

export default ItemChat