import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/About/About";
import { Login } from "./components/Auth/Login/Login";
import { Logout } from "./components/Auth/Logout/Logout";
import { Register } from "./components/Auth/Register/Register";

import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Navigation } from "./components/Navigation/Navigation";
import { TeacherCreate } from "./components/Teachers/TeacherCreate/TeacherCreate";
import { TeacheList } from "./components/Teachers/TeacherList/TeacherList";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <header className="App-header">
                    <Navigation />

                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/teachers" element={<TeacheList />} />
                        <Route
                            path="/teachers/create"
                            element={<TeacherCreate />}
                        />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </header>
            </div>
        </AuthProvider>
    );
}

export default App;
