import Footer from "../components/Footer";
import Accueil from "../components/Accueil";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">

                <main className="flex-1"/>
                    <Accueil />
                <main/>

            <Footer />
        </div>
    );
};

export default Home;
