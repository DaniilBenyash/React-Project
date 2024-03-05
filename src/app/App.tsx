import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./theme/ThemeProvider";

export const App = () => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    );
};
