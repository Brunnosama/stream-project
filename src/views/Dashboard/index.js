import { Alert } from "react-bootstrap";
import { DashboardTitle } from "../../components/DashboardTitle";
import { DashboardLayout } from "../../components/DashboardLayout";

export function DashboardView() {
    return (
        <DashboardLayout>
                <DashboardTitle >
                Welcome, User
                </DashboardTitle>
                <p> Use the menu to manage your data</p>
                <Alert>Check your email to verify your manage options</Alert>
        </DashboardLayout>
    )
}