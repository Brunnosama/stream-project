import { Alert } from "react-bootstrap";
import { DashboardTitle } from "../../components/DashboardTitle";
import { LayoutDashboard } from "../../components/LayoutDashboard";

export function DashboardView() {
    return (
        <LayoutDashboard>
                <DashboardTitle >
                Welcome, User
                </DashboardTitle>
                <p> Use the menu to manage your data</p>
                <Alert>Check your email to verify your manage options</Alert>
        </LayoutDashboard>
    )
}