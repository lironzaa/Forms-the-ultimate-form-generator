import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default App;