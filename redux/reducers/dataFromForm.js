import { SET_DATA_FROM_FORM } from "../actions/dataFromForm";

const dataFromForm = (state=[], action) => {
    switch (action.type) {
        case SET_DATA_FROM_FORM:
            return (
                [
                ...state,
                action.payload
            ]
            )
    
        default:
            return state
    }
}

export default dataFromForm;