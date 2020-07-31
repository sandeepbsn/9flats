import {GET_LISTINGS} from '../actiontypes/listingActionTypes'


export const listingState = {
    pageData:null,    
}

export default (state = listingState, {type, payload}) => {
    switch(type) {
        case GET_LISTINGS:
            return ({
                ...state,
                pageData:payload,
            })

        default:
            return state

    }
}