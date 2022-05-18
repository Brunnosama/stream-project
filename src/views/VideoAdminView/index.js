import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DashboardLayout } from "../../components/DashboardLayout";
import { DashboardTitle } from "../../components/DashboardTitle";
import { deleteVideo, getVideos } from "../../services/Videos.service";
import { TableVideos } from "./TableVideos";

export function VideoAdminView(props) {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const fetchVideos = async () => {
            try {
                const data = await getVideos()
                setVideos(data)
            } catch {
                toast.error('Fail to list videos. Try again.')
            }
            setLoading(false)

        }
        fetchVideos()
    }, [])

    const handleDeleteVideo = async (id) => {
        await deleteVideo(id)
    }
    

    return (
        <DashboardLayout>
            <DashboardTitle buttonText='New Video' buttonLink='/dashboard/videos/add'>
                Registered Videos
            </DashboardTitle>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <TableVideos videos={videos} onClickDelete={handleDeleteVideo}/>
            )}
        </DashboardLayout>
    );
}
