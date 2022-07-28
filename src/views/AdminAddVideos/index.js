import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { DashboardLayout } from "../../components/DashboardLayout";
import { DashboardTitle } from "../../components/DashboardTitle";
import { UpsertVideo } from "../../components/UpsertVideo";
import { createVideo } from "../../services/Videos.service";

export function AdminAddVideosView() {
    
    const navigate = useNavigate()
    //USE THE HOOK useNavigate FROM react-router-dom TO ACTIVELY REDIRECT THE USER TO A DIFFERENT URL (THE HOOK USES A FUNCTION)


    const handleSubmit = async (values) => {
        try {
            await createVideo (values)
            navigate('/dashboard/videos')
            toast.success('Video successfully added')
        } catch {
            toast.error('Failed to add video. Please, try again.')

        }
    }

    return (
        <DashboardLayout>
            <DashboardTitle>New Video</DashboardTitle>
            <UpsertVideo onSubmit={handleSubmit} />
        </DashboardLayout>
    )
}
