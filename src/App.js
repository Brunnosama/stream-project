import { Route, Routes } from "react-router-dom";
import { DashboardView } from "./views/Dashboard";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { VideosView } from "./views/Videos";
import { VideosDetailsView } from "./views/VideosDetails";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/videos' element={<VideosView />} />
      <Route path='/videos/:id' element={<VideosDetailsView />} />
      <Route path='/portal' element={<DashboardView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
    
  );
}

export default App;
