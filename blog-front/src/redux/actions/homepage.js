import { fetchData } from '../../service/service'
export const GET_DATA = "homepage/GET_DATA"


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
