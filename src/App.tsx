import { AllUsersPage } from "./pages/AllUsersPage";
import { Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";

export const App = () => {
    return (
        <Routes>
            <Route element={<AllUsersPage />} path="/" />
            <Route element={<UserPage />} path="/users/:id" />
        </Routes>
    );
};
