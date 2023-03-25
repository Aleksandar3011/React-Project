import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/About/About";
import { Login } from "./components/Auth/Login/Login";
import { Logout } from "./components/Auth/Logout/Logout";
import { Register } from "./components/Auth/Register/Register";

import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Navigation } from "./components/Navigation/Navigation";
import { TeacherCreate } from "./components/Teachers/TeacherCreate/TeacherCreate";
import { TeacherDetails } from "./components/Teachers/TeacherDetails/TeacherDetails";
import { TeacherEdit } from "./components/Teachers/TeacherEdit/TeacherEdit";
import { TeacheList } from "./components/Teachers/TeacherList/TeacherList";
import { AuthProvider } from "./contexts/AuthContext";
import { TeacherProvider } from "./contexts/TeacherContext";

function App() {
    return (
        <AuthProvider>
            <TeacherProvider>
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
                            <Route path="/teachers/create" element={<TeacherCreate />}/>
                            <Route path="/teacher/:teacherId" element={<TeacherDetails />} />
                            <Route path="/teacher/:teacherId/edit" element={<TeacherEdit />} />

                            <Route path="*" element={<h1>404</h1>} />
                        </Routes>
                    </header>
                </div>
            </TeacherProvider>
        </AuthProvider>
    );
}

export default App;
