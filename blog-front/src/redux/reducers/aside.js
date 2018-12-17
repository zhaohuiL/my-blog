import { GET_ASIDE_DATA } from '../actions/aside'
const initState = {
    asideData: []
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_ASIDE_DATA:
            return {
                ...state,
                asideData: action.payload
            }
        default:
            return state
    }
}