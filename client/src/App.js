import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/About/About";
import { Login } from "./components/Auth/Login/Login";
import { Logout } from "./components/Auth/Logout/Logout";
import { Register } from "./components/Auth/Register/Register";
import { RouteGuard } from "./components/common/RouteGuard";

import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Navigation } from "./components/Navigation/Navigation";
import { TeacherCreate } from "./components/Teachers/TeacherCreate/TeacherCreate";
import { TeacherDetails } from "./components/Teachers/TeacherDetails/TeacherDetails";
import { TeacherEdit } from "./components/Teachers/TeacherEdit/TeacherEdit";
import { TeacheList } from "./components/Teachers/TeacherList/TeacherList";
import { CreateTest } from "./components/Tests/CreateTest/CreateTest";
import { TestItem } from "./components/Tests/TestList/TestItem";
import { TestList } from "./components/Tests/TestList/TestList";
import { AuthProvider } from "./contexts/AuthContext";
import { TeacherProvider } from "./contexts/TeacherContext";
import { TestProvider } from "./contexts/TestContext";

function App() {
    return (
        <AuthProvider>
            <TeacherProvider>
                <TestProvider>
                    <div className="App">
                        <header className="App-header">
                            <Navigation />

                            <Routes>
                                <Route path="/" element={<HomeScreen />} />
                                <Route path="/about" element={<AboutUs />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/teachers" element={<TeacheList />} />
                                <Route path="/teacher/:teacherId/edit" element={<TeacherEdit />} />
                                <Route path="/tests" element={<TestList />}/>
                                <Route path="/teacher/:teacherId" element={<TeacherDetails />} />

                                <Route element={<RouteGuard />}>
                                    <Route path="/logout" element={<Logout />} />

                                    <Route path="/teachers/create" element={<TeacherCreate />}/>

                                    <Route path="/test/create" element={<CreateTest />}/>
                                    <Route path="/test/:testId" element={<TestItem />}/>
                                </Route>
                                

                                <Route path="*" element={<h1>404</h1>} />
                            </Routes>
                        </header>
                    </div>
                </TestProvider>
            </TeacherProvider>
        </AuthProvider>
    );
}

export default App;
