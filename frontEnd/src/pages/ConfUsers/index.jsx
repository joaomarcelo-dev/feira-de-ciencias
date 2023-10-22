import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { endPoint } from "../../provider/server.provider";
import CardUser from "../../components/CardUser";

function ConfUser() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(`${endPoint}/user`);
    console.log(data);
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${endPoint}/user/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, [])

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
