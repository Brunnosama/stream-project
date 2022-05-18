import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DashboardLayout } from "../../components/DashboardLayout";
import { DashboardTitle } from "../../components/DashboardTitle";
import { ModalConfirm } from "../../components/ModalConfirm";
import { deleteVideo, getVideos } from "../../services/Videos.service";
import { TableVideos } from "./TableVideos";

export function VideoAdminView() {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    // IF THE FUNCTION USE PROPS OR DATA THAT COME FROM A STATE OR SOMETHING, REACT THINK IT COULD BE OUTDATED, SO IT REQUIRES A PARAMS/CALLBACK HOOK TO UPDATE IT
    const fetchVideos = async () => {
        try {
            const data = await getVideos()
            setVideos(data)
        } catch {
            toast.error('Fail to list videos. Try again.')
        }
        setLoading(false)
        //IN THIS CASE, THE 'SET' PART OF A STATE DOESN'T CHANGE, SO REACT DON'T CARE.
    }
    useEffect(() => {
        fetchVideos()
    }, [])

    const [videoToDelete, setVideoToDelete] = useState()
    //STATE CREATED TO KEEP THE "id" INFO PASSED THROUGH 'openModal' AND SENT IT AS PROPS TO THE 'handleDeleteVideo'

    const openModal = (video) => {
        setVideoToDelete(video)
    }

    const closeModal = () => {
        setVideoToDelete(undefined)
    }

    const handleDeleteVideo = async () => {
        try {
            await deleteVideo(videoToDelete.id)
            await fetchVideos()
            //CALL 'fetchVideos' AGAIN TO LIST THE UPDATED VIDEO LIST (AFTER DELETION)
            toast.success('The video was deleted')
            closeModal()
        } catch {
            toast.error('Delete action failed. Try again')
        }
    }


    return (
        <DashboardLayout>
            <DashboardTitle buttonText='New Video' buttonLink='/dashboard/videos/add'>
                Registered Videos
            </DashboardTitle>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <TableVideos videos={videos} onClickDelete={openModal} />
            )}
            <ModalConfirm
                show={!!videoToDelete}
                onConfirm={handleDeleteVideo}
                onHide={closeModal}
                modalTitle="Are you sure to delete?"
                modalContent={<p> <strong>{videoToDelete?.title}</strong> will be removed permanently from Assista!</p>}/>
        </DashboardLayout>
    );
}
