import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";
import { DashboardTitle } from "../../components/DashboardTitle";
import { UpsertVideo } from "../../components/UpsertVideo";
import { getVideoById, updateVideo } from "../../services/Videos.service";
import { Loading } from "../../components/Loading";

export function AdminEditVideoView() {
    const { id } = useParams()
    const [video, setVideo] = useState()
    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const {
                    title,
                    releaseYear,
                    description,
                    direction,
                    img,
                    genres
                } = await getVideoById(id)
                setVideo({
                    title,
                    releaseYear,
                    description,
                    direction,
                    img,
                    genres,
                })
            } catch {
                toast.error('Failed to fetch video data. Please, try again.')
            }
        }
        fetchVideo()

    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            await updateVideo(id, values)
            toast.success('Video successfully edited.')
            navigate('/dashboard/videos')
        } catch {
            toast.error('Failed to edit the video. Please, try again.')
        }
    }
    console.log(video)
    return (
        <DashboardLayout>
            <DashboardTitle>Edit Video</DashboardTitle>
            {video ? (
                <UpsertVideo initialState={video} buttonLabel='Keep changes' onSubmit={handleSubmit} />
            ) : (
                <Loading />
            )}

        </DashboardLayout>
    );
}