import { GET_DATA } from '../actions/homepage'
const initState = {
    backgroundImage: "http://oo12ugek5.bkt.clouddn.com/blog/images/banner.jpeg",
    description: '日常学习与兴趣交流',
    title: 'MINEFIVE BLOG',
    data: []
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
