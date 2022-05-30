import { DashboardLayout } from "../../components/DashboardLayout";
import { DashboardTitle } from "../../components/DashboardTitle";
import { UpsertVideo } from "../../components/UpsertVideo";

export function AdminAddVideosView() {
    return (
        <DashboardLayout>
            <DashboardTitle>New Video</DashboardTitle>
            <UpsertVideo />
        </DashboardLayout>
    )
}
