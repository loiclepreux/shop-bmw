import logo from "../assets/logo.png";
import type { ICars } from "../interfaces/cars";

interface INavigationBarProps {
    selection: number[];
    cars: ICars[];
    removeFromSelection: (id: number) => void;
}

const NavigationBar = ({ selection, cars, removeFromSelection }: INavigationBarProps) => {
    const selectedCars = cars.filter((car) => selection.includes(car.id));

    return (
        <nav className="bg-black w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-white dark:text-neutral-200">
                    <img
                        src={logo}
                        alt="BMW Logo"
                        className="w-22 h-22 object-contain"
                    />
                    <span className="text-xl font-semibold text-white text-center dark:text-neutral-200">
                        EVA Concession
                    </span>
                </span>
            </div>

            <div
                id="hs-navbar-example"
                className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                aria-labelledby="hs-navbar-example-collapse"
                role="region"
            >
                <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                    <button
                        className="relative btn px-5 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:border-blue-600 hover:text-blue-500 hover:bg-neutral-800 transition duration-300"
                        popoverTarget="popover-1"
                        style={
                            { anchorName: "--anchor-1" } as React.CSSProperties
                        }
                    >
                        My Selection
                        {/* On affiche simplement le nombre de voitures sélectionnées */}
                        <span className="absolute top-1/2 -right-2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {selection.length}
                        </span>
                    </button>

                    <ul
                        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm mt-4 border border-black text-black"
                        popover="auto"
                        id="popover-1"
                        style={
                            {
                                positionAnchor: "--anchor-1",
                            } as React.CSSProperties
                        }
                    >
                        {/* On map sur les objets complets, pas sur les ids */}
                        {selectedCars.map((car) => (
                            <li
                                key={car.id}
                                className="flex justify-between items-center"
                            >
                                <span>
                                    {car.model} - {car.brand}
                                </span>

                                <button
                                    onClick={() => removeFromSelection(car.id)}
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    🗑
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button className="px-5 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:border-blue-600 hover:text-blue-500 hover:bg-neutral-800 transition duration-300">
                        Home
                    </button>
                    <button className="px-5 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:border-blue-600 hover:text-blue-500 hover:bg-neutral-800 transition duration-300">
                        Maintenance
                    </button>
                    <button className="px-5 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:border-blue-600 hover:text-blue-500 hover:bg-neutral-800 transition duration-300">
                        Blog
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
