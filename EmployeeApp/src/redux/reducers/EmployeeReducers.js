import * as types from "../types";

const initial_State= {
    data: [],
}
const employeeReducer = (state=initial_State,action)=>{
    // console.log("Reducer ==",action.type)
switch(action.type){
    //add Entry
    case types.ADD_EMPLOYEE : {
        // console.log("data=2==>",action)
        return{
            ...state,
            data: [...state.data, action.payload],
        }
    } 
    // Edit Entry
    case types.EDIT_ENTRY : {
        // console.log("state.edit_data",action)

        const { id, firstname, designation, experience } = action.payload;
        
        const entryIndex = state.data.findIndex(entry => entry.id === id);
        if (entryIndex !== -1) {
            const updatedEntries = state.data.map((entry, index) => {
            if (index === entryIndex) {
                return { ...entry, firstname, designation, experience };
            }
        return entry;
        });
        return {
        ...state,
        data: updatedEntries,
        };
    }
    return state; 
    } 
        
    // Delete Entry
    case types.DELETE_ENTRY : {
        const filteredEntries = state.data.filter(entry => entry && entry.id !== action.payload);
        return{
        ...state,
        data: filteredEntries,
        }
    } 
    default:
     return state;
    }
}

export default employeeReducer;