import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NavigationBar from "./components/NavigationBar";
import { cars } from "./data/carsdata";
import { useState } from "react";

const App = () => {
    const [selection, setSelection] = useState<number[]>([]);
    console.log(selection);

    const removeFromSelection = (id: number) => {
        setSelection(selection.filter((carId) => carId !== id));
        console.log(removeFromSelection);
    };

    return (
        <BrowserRouter>
            <NavigationBar
                selection={selection}
                cars={cars}
                removeFromSelection={removeFromSelection}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Model" element={<Model />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
