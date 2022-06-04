import { SET_PAGE_1_DATA} from "../actions/dataFromForm";
import { SET_PAGE_2_DATA} from "../actions/dataFromForm";
import { SET_PAGE_3_DATA} from "../actions/dataFromForm";
import { SET_PAGE_4_DATA} from "../actions/dataFromForm";

const dataFromForm = (state=[{},{},{},{}], action) => {
    switch (action.type) {
            case SET_PAGE_1_DATA:
                state[0] = action.payload
                return ([
                    ...state                    
                ])
            case SET_PAGE_2_DATA:
                state[1] = action.payload
                return ([
                    ...state                    
                ])
            case SET_PAGE_3_DATA:
                state[2] = action.payload
                return ([
                    ...state                    
                ])
            case SET_PAGE_4_DATA:
                state[3] = action.payload
                return ([
                    ...state                    
                ])
    
        default:
            return state
    }
}

export default dataFromForm;