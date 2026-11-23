import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import StudentList from "./pages/StudentList";
import Favourites from "./pages/Favourites";
import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;