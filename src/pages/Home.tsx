import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { cars } from "../data/carsdata";
import Accueil from "../components/Accueil";

const Home = () => {
    const [selection, setSelection] = useState<number[]>([]);
    console.log(selection);

    const removeFromSelection = (id: number) => {
        setSelection(selection.filter((carId) => carId !== id));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar
                selection={selection}
                cars={cars}
                removeFromSelection={removeFromSelection}/>

                <main className="flex-1"/>
                    <Accueil />
                <main/>

            <Footer />
        </div>
    );
};

export default Home;
