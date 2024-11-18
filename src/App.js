import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
