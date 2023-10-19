import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

interface ButtonNavigateProps {
  route: string;
  params?: Object;
  children: React.ReactNode;
}

function ButtonNavigate({ children, ...props }: ButtonNavigateProps) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate(props.route, props.params)}
    >
      { children }
    </TouchableOpacity>  
  );
}


export default ButtonNavigate;
