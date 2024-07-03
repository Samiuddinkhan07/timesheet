
import {BrowserRouter as AppRouter, Routes, Route,} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import HomePage from "./Pages/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

function App() {

  return (
    <>
      <AppRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<HomePage/>}>
                <Route path="/home/" element={<Dashboard/>}/>
            </Route>
        </Routes>
      </AppRouter>
    </>
  )
}

export default App
