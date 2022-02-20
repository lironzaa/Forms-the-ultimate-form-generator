import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import FormPage from "./pages/FormPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path='/form/:formID' element={<FormPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default App;