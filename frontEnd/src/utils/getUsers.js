import axios from 'axios';
import { endPoint } from '../provider/server.provider';

export const getAllUser = async () => {
  const { data } = await axios.get(`${endPoint}/user`);

  return data;
}
