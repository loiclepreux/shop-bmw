export interface Engine {
    type: string;
    code: string;
    powerHp: number;
    torqueNm: number;
}

export interface ICars {
    id: number;
    brand: string;
    model: string;
    generation: string;
    image: string;
    engine: Engine;

    zeroTo100: number;
    topSpeed: number;
    weightKg: number;
    priceFromEUR: number;
    category: string;
}
