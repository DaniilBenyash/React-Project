import './App.css'
import { AllUsersPage } from "../modules/AllUsersPage";
import { Route, Routes } from "react-router-dom";
import { UserPage } from "../modules/UserPage";

export const App = () => {
    return (
        <Routes>
            <Route element={<AllUsersPage />} path="/" />
            <Route element={<UserPage />} path="/users/:id" />
        </Routes>
    );
};
