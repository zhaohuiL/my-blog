import { GET_DATA, CHANGE_ARCHIVES_TAB } from '../actions/archives'
import { ARCHIVES_TAB } from '../../pages/Archives/data'

const initState = {
    year:ARCHIVES_TAB[0],
    data: []
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case CHANGE_ARCHIVES_TAB:
            return {
                ...state,
                year:action.payload
            }
        default:
            return state
    }
}