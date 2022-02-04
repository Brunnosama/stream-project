import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { VideosView } from "./views/Videos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/videos" element={<VideosView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
    
  );
}

export default App;
