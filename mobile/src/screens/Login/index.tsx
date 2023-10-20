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
  const [invalidLogin, setInvalidLogin] = useState(false);
  const validateLogin = userName.length >= 2 && userPassword.length >= 4;

  const dispatch = useDispatch();

  const handleLogin = async () => {

    const { data } = await axiosOperator({
      baseURL: endPoint,
      headers: {},
      method: 'post',
      router: routerLoginUser,
    }, {
      name: userName,
      password: userPassword,
    });


    // console.log(data);
    
    const { token, userId } = data;

    if (!token || !userId) return setInvalidLogin(true);

    dispatch(
      addUser({
        userName,
        userPassword,
        tokenUser: token,
        userId,
      }),
    );

    const { data: dataChats } = await axiosOperator({
      baseURL: endPoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'get',
      router: routerGetAllChats,
    }, {});

    console.log(dataChats);
    

    dispatch(addChats(dataChats));
  };

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

