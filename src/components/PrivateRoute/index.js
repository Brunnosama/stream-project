import { Navigate } from "react-router-dom"
import { selectUser } from "../../store/User/User.selectors"
import { useSelector } from "react-redux"

export function PrivateRoute ({children, userTypes}) {
    const user = useSelector(selectUser)
    if(!user) {
        return <Navigate to='/dashboard/login' />
    }
    if(userTypes && !userTypes.includes(user.type)){
        return <Navigate to='/dashboard' />
    }
    return children
}