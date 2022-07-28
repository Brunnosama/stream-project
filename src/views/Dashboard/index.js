import { Alert } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { DashboardTitle } from "../../components/DashboardTitle";
import { DashboardLayout } from "../../components/DashboardLayout";
import { selectUser } from "../../store/User/User.selectors";

export function DashboardView() {
    const user = useSelector(selectUser)
    return (
        <DashboardLayout>
            <DashboardTitle >
                Welcome, {user.name}!
            </DashboardTitle>
            {user.type === 1 ? (<p> Use the menu to manage your data</p>) : (<Alert>Check your email to verify your account options</Alert>)}
        </DashboardLayout>
    )
}