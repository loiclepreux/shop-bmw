const Accueil = () => {
    return (
        <section className="flex-1 px-6 py-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold">EVA Concession BMW</h1>

                <p className="mt-4 text-lg opacity-80">
                    Découvre nos modèles, compare les caractéristiques, et
                    sélectionne tes favoris.
                </p>

                <div className="carousel w-full h-120">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="../../public/images/bmw-m4.jpg"
                            className="w-full"
                        />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="../../public/images/bmw-10.png"
                            className="w-full"
                        />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="../../public/images/bmw-m2.jpg"
                            className="w-full"
                        />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="../../public/images/bmw-1.png"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">
                        1
                    </a>
                    <a href="#item2" className="btn btn-xs">
                        2
                    </a>
                    <a href="#item3" className="btn btn-xs">
                        3
                    </a>
                    <a href="#item4" className="btn btn-xs">
                        4
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Accueil;
