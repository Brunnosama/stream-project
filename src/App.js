import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminAddVideosView } from "./views/AdminAddVideos";
import { AdminEditVideoView } from "./views/AdminEditVideo";
import { DashboardView } from "./views/Dashboard";
import { HomeView } from "./views/Home";
import { LoginView } from "./views/Login";
import { NotFoundView } from "./views/NotFound";
import { VideoAdminView } from "./views/VideoAdminView";
import { VideosView } from "./views/Videos";
import { VideosDetailsView } from "./views/VideosDetails";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/videos' element={<VideosView />} />
      <Route path='/videos/:id' element={<VideosDetailsView />} />
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <DashboardView />
          </PrivateRoute>
        }
      />
      <Route
        path='/dashboard/videos'
        element={
          <PrivateRoute userTypes={[1]}>
            <VideoAdminView />
          </PrivateRoute>
        }
      />
      <Route
        path='/dashboard/videos/add'
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminAddVideosView />
          </PrivateRoute>
        }
      />
      <Route path='*' element={<NotFoundView />} />
      <Route
        path='/dashboard/videos/:id'
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminEditVideoView />
          </PrivateRoute>
        }
      />
      <Route path='/dashboard/login' element={<LoginView />} />
    </Routes>

  );
}

export default App;
