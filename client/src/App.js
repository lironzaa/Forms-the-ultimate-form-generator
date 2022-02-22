import { Route, Routes } from "react-router-dom";
import CreateFormPage from "./pages/CreateFormPage";
import FormPage from "./pages/FormPage";
import SubmittedFormsPage from "./pages/SubmittedFormsPage";
import UserPage from "./pages/UserPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserPage/>}/>
            <Route path='/create-form' element={<CreateFormPage/>}/>
            <Route path='/form/:formID' element={<FormPage/>}/>
            <Route path="/submitted-forms" element={<SubmittedFormsPage/>}/>
        </Routes>
    )
}

export default App;