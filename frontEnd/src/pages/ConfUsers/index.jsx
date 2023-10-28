import Header from "../../components/Header";
import axios from "axios";
import { endPoint } from "../../provider/server.provider";
import CardUser from "../../components/CardUser";
import { useSelector } from 'react-redux';

function ConfUser() {
  const { users } = useSelector((state) => state.app);

  const deleteUser = async (id) => {
    await axios.delete(`${endPoint}/user/${id}`);
  }

  return (
    <>
      <Header />
      <div>
        {
          users.map((user) => {
            return (
              // <h2 key={user.id}>{ user.name }</h2>
              <CardUser
                key={ user.id }
                userName={ user.name }
                password={ user.password }
                online={ user.online }
                activated={ user.active }
                deleteUser={ () => deleteUser(user.id) }
              />
            )
          })
        }
      </div>
    </>
  )
}

export default ConfUser;
