
import * as types from '../types';


export const addEmployeeActions = (data) => {
  // console.log('dataeddemployee=========',data);
  return {
    type: types.ADD_EMPLOYEE,
    payload: data
  }
}
  
export const editEntry = (entry) => {
    // console.log('dataeddemployeeentry=========',entry);
return {
    type: types.EDIT_ENTRY,
    payload: entry,
};
};

export const deleteEntry = (id) => {
    // console.log('id=========',id);
return {
    type: types.DELETE_ENTRY,
    payload: id,
};
};
  
