import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/About/About";

import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Navigation } from "./components/Navigation/Navigation";
import { TeacherCreate } from "./components/Teachers/TeacherCreate/TeacherCreate"; 
import { TeacheList } from "./components/Teachers/TeacherList/TeacherList";

function App() {
    return (

            <div className="App">
              <header className="App-header">
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/teachers" element={<TeacheList />} />
                    <Route path="/teachers/create" element={<TeacherCreate />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
              </header>
            </div>
    );
}

export default App;
