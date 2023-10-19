import { prisma } from "../provider/prisma.provider";
import { User } from "../types/User.types";

class UserModel {
  async createUser({ name, password }: User ) {
    const userCreated = prisma.user.create({
      data: {
        name,
        password,

      }
    });

    return userCreated;
  }


  async getAllUsers() {
    const users = await prisma.user.findMany();

    return users;
  }

  async getUserByName(name: string) {
    const user = await prisma.user.findFirst({
      where: {
        name,
      }
    });

    return user;
  }
}

export default UserModel;