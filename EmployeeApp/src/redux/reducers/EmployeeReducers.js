import * as types from "../types";

// import { ADD_STATUS } from "../types"

const initial_State= {
    data: null,
    loading: false,
    createAlert_data: null,

    data_add:[],
}
const employeeReducer = (state=initial_State,action)=>{
    // console.log("Reducer ==",action.type)

    // console.log("Reducer ==",action)
    switch(action.type){
        case  types.EMPLOYEE_DETAIL_START : {
            return{
                ...state,
                data: null,
                loading: true,
                error: false,
                error_msg: "",
            }
        }
        case  types.EMPLOYEE_DETAIL_SUCCESS : {
            console.log('data',data);
            return{
                ...state,
                data: action.payload.data,
                loading: false,
                error: false,
            }
        }case types.EMPLOYEE_DETAIL_FAIL : {
            return{
                ...state,
                data: null,
                loading: false,
                error: true,
                error_msg: action.payload.errorDescription,
            }
        }
        //add status
        case types.ADD_EMPLOYEE : {
            // console.log("data=2==>",action)
            return{
                // ...state,
                data_add: [action.payload, ...state.data_add],
            }
        } 
        default:
            return state;
    }
}

export default employeeReducer;