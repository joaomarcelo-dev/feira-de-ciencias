import { Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChats, addUser } from "../../Redux/actions/app.action";
import { axiosOperator } from "../../services/server";
import { endPoint, routerGetAllChats, routerLoginUser} from "../../Provider/app.server";


function Login() {
  const [ userName, setUserName ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  const validateLogin = userName.length >= 2 && userPassword.length >= 4;

  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(
      addUser({
        userName,
        userPassword,
      })
    );
  }

  return (
    <View style={ style.content }>
      <View style={ style.container }>
        <Text style={ style.title }>Login</Text>

        <TextInput
          style={ style.inputText }
          placeholder="Usuário"
          onChangeText={ (text) => setUserName(text)}
        />

        
        <TextInput
          style={ style.inputText }
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={ (text) => setUserPassword(text)}
        />

        <TouchableOpacity
          style={
            validateLogin
              ? style.buttonSubmit
              : style.buttonSubmitDisabled
          }
          disabled={ !validateLogin }
          onPress={ handleLogin }
        >
          <Text style={ style.textButtonSubmit }>Entrar</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Login;

