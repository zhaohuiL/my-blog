import { fetchData } from '../../service/service'
export const GET_DATA = "archives/GET_DATA"
export const CHANGE_ARCHIVES_TAB = "archives/changeArchivesTab"

export const getData = () => {
    return dispatch => {
        let data = []
        fetchData().then(res => {
            // console.log(res)
            data = res
            dispatch({type: GET_DATA,payload:data})
        });
        
    }
}

export const changeArchivesTab = (year) => {
    return {
        type: CHANGE_ARCHIVES_TAB,
        payload: year
    } 
}
