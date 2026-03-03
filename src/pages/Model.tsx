import Footer from "../components/Footer";
import Car from "../components/Car";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ICars } from "../interfaces/cars";

function Model() {
    const [selection, setSelection] = useState<number[]>([]);
    const [cars, setCars] = useState<ICars[]>([]);

    const handleSelection = (id: number) => {
        if (!selection.includes(id)) {
            setSelection([...selection, id]);
        }
    };
    console.log(selection);

    useEffect(() => {
        //     const getCar = async () => {
        //     const url = 'http://localhost:3001/cars'
        //     const car = await fetch(url)
        //     const carJson = await car.json()
        //     console.log(carJson)
        //     }
        // getCar()

                const getCar = async () => {
                    const url = 'http://localhost:3001/cars'
                    const option = {
                    }
                    const car = await axios.get(url, option)
                    console.log(car.data)
                    setCars(car.data)
                }
            getCar()
        }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 items-stretch">
                {cars.map((car) => (
                    <Car key={car.id} carsData={car} {...{ handleSelection }} />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Model;
