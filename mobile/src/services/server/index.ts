import axios from 'axios';

interface IAxios {
  baseURL: string,
  router: string,
  headers: object,
  method: 'post' | 'get' | 'put' | 'delete',
}

export const axiosOperator = async (
  { baseURL, headers, method, router }: IAxios,
  data: object,
) => {
  const url = `${baseURL}${router}`;
  const response = await axios[method](
    url,
    data,
    {
      headers,
    }
  );

  return response;
};
