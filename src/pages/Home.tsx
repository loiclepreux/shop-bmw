import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Car from "../components/Car";
import {cars} from "../data/carsdata";
import { useState } from "react";

function App () {
    const [selection, setSelection] = useState<number[]>([]);

    const handleSelection = (id: number) => {
        if (!selection.includes(id)){
            setSelection([...selection, id])
        }
    }
    console.log(selection);

    const removeFromSelection = (id: number) => {
        setSelection(selection.filter((carId) => carId !== id));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar selection={selection} cars={cars} removeFromSelection={removeFromSelection} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 items-stretch">
                    {cars.map((car) => (
                        <Car key={car.id} carsData={car} {...{handleSelection}} />
                    ))}
                </div>

            <Footer />
        </div>
    );
};

export default App;