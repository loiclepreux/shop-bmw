import type { ICars } from "../interfaces/cars";
import { GrFavorite } from "react-icons/gr";
import { useState } from "react";

interface ICarcomponent {
    carsData: ICars,
    handleSelection : (id:number) => void,
}

const Car = ({ carsData, handleSelection }:ICarcomponent) => {

    const [counter, setCounter] = useState(0);
    const handleLike = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    return (
        <div className="Car w-150">
            <div className="h-full flex flex-col rounded-xl overflow-hidden border shadow-sm bg-white dark:bg-neutral-800">
                <img
                    className="w-full h-full object-contain"
                    src={carsData.image}
                    alt={carsData.model}
                />
                <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                        {carsData.model} - {carsData.generation} - {carsData.priceFromEUR} €
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        {carsData.engine.type} - {carsData.engine.powerHp} CV -{" "}
                        {carsData.category} - {carsData.topSpeed}km/h
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <button type="button" onClick={() => handleSelection(carsData.id)}
                            className="py-2 px-4 text-sm font-medium rounded-lg bg-gray-800 dark:bg-white text-white dark:text-neutral-800 hover:bg-gray-900 dark:hover:bg-neutral-300 transition"
                        >
                            Add to selection
                        </button>
                        <button type="button"  
                            className="py-2 px-4 text-sm font-medium rounded-lg bg-gray-800 dark:bg-white text-white dark:text-neutral-800 hover:bg-gray-900 dark:hover:bg-neutral-300 transition"
                        >
                            View Details
                        </button>

                        <div
                            onClick={handleLike}
                            className="flex items-center gap-1 cursor-pointer select-none"
                        >
                            <GrFavorite
                                size={28}
                                className="text-red-500 hover:scale-110 transition"
                            />
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                {counter}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;
