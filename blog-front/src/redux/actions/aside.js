import { fetchAsideData } from '../../service/service'
export const GET_ASIDE_DATA = "aside/GET_ASIDE_DATA"


export const getAsideData = () => {
    return dispatch => {
        let asideData = []
        fetchAsideData()
        .then(res => {
            asideData = res
            dispatch({type: GET_ASIDE_DATA, payload:asideData})
        });
    }
}