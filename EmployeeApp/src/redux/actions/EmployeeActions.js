import { services } from '../../service';
import * as types from '../types';


export const addEmployeeActions = (data) => {
  console.log('dataeddemployee=========',data);
  return {
    type: types.ADD_EMPLOYEE,
    payload: data
  }
}

export const employeeDetails = (data) => {
  return (dispatch) => {
      dispatch({
          type: types.EMPLOYEE_DETAIL_START,
          payload: null,
      });
      services.post('login/api', data)
          .then((res) => {
              if (res.code === 200 && res.errorCode == 0) {
                  dispatch({
                      type: types.EMPLOYEE_DETAIL_SUCCESS,
                      payload: res,
                  });
              } else {
                  dispatch({
                      type: types.EMPLOYEE_DETAIL_FAIL,
                      payload: res,
                  });
              }
          })
          .catch((err) => {
              console.log(err)
          })
  }
}