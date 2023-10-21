import { endPoint, routerCodes } from '../Provider/app.server';
import { addCodes } from '../Redux/actions/app.action';
import store from '../Redux/store.redux';
import { axiosOperator } from '../services/server/index';

import { useDispatch } from 'react-redux';

export const getCodes = async () => {

  const response = await axiosOperator({
    baseURL: endPoint,
    headers: {},
    method: 'get',
    router: routerCodes,
  }, {});
  
  const codes = response.data;
  store.dispatch(addCodes(codes))
}

  
