export default class Spaceage {
    constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
        this.earthAge = earthAge;
        this.mercuryAge = mercuryAge;
        this.venusAge = venusAge;
        this.marsAge = marsAge;
        this.jupiterAge = jupiterAge;
}

    mercuryAgeCalc() {
        let mercuryAge = this.earthAge / .24;
        return mercuryAge.toFixed(2);
}

    venusAgeCalc() {
        let venusAge = this.earthAge / .615;
        return venusAge.toFixed(2);
}

    marsAgeCalc() {
        let marsAge = this.earthAge / 1.88;
        return marsAge.toFixed(2);
}

    jupiterAgeCalc() {
        let jupiterAge = this.earthAge / 12;
        return jupiterAge.toFixed(2);
}
};