import { io } from "../app";
import UserModel from "../model/user.model";
import { generateToken } from "../provider/token.provider";
import { User } from "../types/User.types";

const userModel = new UserModel(); 

class UserService {
  async createUser({ name, password }: User) {
    const userAlreadyExists = await userModel.getUserByName(name);

    if (userAlreadyExists) return {
      status: 409,
      data: {
        message: "O nome de usuário já está cadastrado no banco de dados!",
      }
    }

    const userCreated = await userModel.createUser({ name, password });

    const token = generateToken({
      id: userCreated.id,
      name: userCreated.name
    });

    io.emit('new-user',userCreated);

    return {
      status: 201,
      data: {
        token,
        idUser: userCreated.id,
      },
    }
  }

  async loginUser({ name, password }: User) {
    const user = await userModel.getUserByName(name);

    if (user) {
      const token = generateToken(user);

      return {
        status: 200,
        data: {
          token,
          userId: user.id,
        } 
      }
    }

    const userCreated = await userModel.createUser({ name, password });

    const token = generateToken({
      id: userCreated.id,
      name: userCreated.name
    });

    return {
      status: 201,
      data: {
        token,
        userId: userCreated.id,
      }
    }
  }


  async getAllUsers() {
    const allUsers = await userModel.getAllUsers();

    return {
      status: 200,
      data: allUsers,
      
    }
  }

  async deleteUser(userId: string) {
    const userExists = await userModel.getUserById(userId);

    if (!userExists) return {
      status: 404,
      data: {
        message: "Usuário não encontrado!",
      }
    }

    await userModel.deleteUser(userId);

    io.emit('delete-user', userId);

    return {
      status: 200,
      data: {
        message: "Usuário deletado com sucesso!",
      }
    }
  }
}

export default UserService;
