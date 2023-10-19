import ItemChat from "../ItemChat";
import { useNavigation } from "@react-navigation/native";
import ButtonNavigate from "../ButtonNavigate";
import { useSelector } from "react-redux";
import RootReducer from "../../types/RootReducer.type";

interface ListChatsProps {
  chats: {
    id: string;
    chatName: string;
    thumbnail: string;
    members: {
      id: string;
      userId: string;
      chatId: string;
    }[]
  }[];
}

function ListChats({ chats }: ListChatsProps) {

  const { tokenUser } = useSelector((state: RootReducer) => state.app);

  return (
    <>
      {
        chats.map((chat) => {
          return (
            <ButtonNavigate
              key={chat.id}
              route="Chat"
              params={{
                chatId: chat.id,
                tokenUser,
              }}
            >
              <ItemChat
                chatName={chat.chatName}
                thumbnail={chat.thumbnail}
                members={chat.members.length}
              />
            </ButtonNavigate>

          )
        })
      }
    </>
  )
}

export default ListChats;
