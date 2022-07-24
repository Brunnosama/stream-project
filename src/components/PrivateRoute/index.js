import { Navigate } from "react-router-dom"
import { selectUser } from "../../store/User/User.selectors"
import { useSelector } from "react-redux"

export function PrivateRoute ({children}) {
    const user = useSelector(selectUser)
    if(!user) {
        return <Navigate to='/dashboard/login' />
    }
    return children
}