import { Alert } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { DashboardTitle } from "../../components/DashboardTitle";
import { DashboardLayout } from "../../components/DashboardLayout";

const selectUser = (state) => state

export function DashboardView() {
    const user = useSelector(selectUser)
    return (
        <DashboardLayout>
            <DashboardTitle >
                Welcome, {user.name}!
            </DashboardTitle>
            {user.type === 1 ? (<p> Use the menu to manage your data</p>) : (<Alert>Check your email to verify your manage options</Alert>)}
        </DashboardLayout>
    )
}