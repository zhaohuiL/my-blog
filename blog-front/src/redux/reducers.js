import homepage from './reducers/homepage'
import aside from './reducers/aside'
import archives from './reducers/archives'
export default function combinReducers(state = {}, action){
    return {
        homepage: homepage(state.homepage, action),
        aside: aside(state.aside, action),
        archives: archives(state.archives, action)
    }
}