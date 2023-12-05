// export const endPoint = 'http://localhost:3000';
// export const endPoint = 'http://10.0.0.227:3333'; //Endereço IP Escola
// export const endPoint = 'http://192.168.1.116:3333'; //Endereço IP Minha casa
export const endPoint = 'http://10.0.0.101:3333'


export const routerTestServer = '/test';

export const routerLoginUser = '/user/login';
export const routerGetAllChats = '/chat';
export const routerMessageByChatId = (id: string): string => `/message/${id}`;
export const routerCodes = '/codes'