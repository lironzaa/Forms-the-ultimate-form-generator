import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import FillFormPage from "./pages/user/FillFormPage";
import FormsPage from "./pages/user/FormsPage";
import SubmittedFormsPage from "./pages/admin/SubmittedFormsPage";
import CreateFormPage from "./pages/admin/CreateFormPage";
import NavBar from "./components/Layout/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import './app.css';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
      <ChakraProvider>
        <App/>
        <NavBar/>
        <Routes>
            <Route path="" element={<FormsPage/>}/>
            <Route path="form/:formId" element={<FillFormPage/>}/>
            <Route path="admin" element={<SubmittedFormsPage/>}/>
            <Route path="admin/form" element={<CreateFormPage/>}/>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>,
    rootElement
);