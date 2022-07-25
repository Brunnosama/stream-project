import { store } from '../store/store'
import { selectUser } from '../store/User/User.selectors'

export const apiUrl = process.env.REACT_APP_API_URL

export const getAuthorizationHeader = () => {
    const state = store.getState()
    const { accessToken } = selectUser(state)
    return {
        'Authorization': `Bearer ${accessToken}`
    }
}