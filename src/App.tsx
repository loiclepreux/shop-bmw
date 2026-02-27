import { BrowserRouter, Routes, Route} from "react-router";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


const App = () => {
    return <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/Model" element={<Model />}/>
            <Route path="/Signin" element={<Signin />}/>
            <Route path="/Signup" element={<Signup />}/>

        </Routes>
        </BrowserRouter>
}
export default App;
