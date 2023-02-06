export default class SpaceAge {
    constructor(presentAge,  pastAge, futureAge) {
        this.presentAge = presentAge;
        // this.mercuryAge = mercuryAge;
        // this.venusAge = venusAge;
        // this.marsAge = marsAge;
        // this.jupiterAge = jupiterAge;
}

    mercuryAge() {
        let mercuryAge = this.mercuryAge / .24;
        return mercuryAge.toFixed(2);
    
}

//     venusAgeCalc() {
//         let venusAge = this.nowAge / .615;
//         return venusAge.toFixed(2);
// }

//     marsAgeCalc() {
//         let marsAge = this.nowAge / 1.88;
//         return marsAge.toFixed(2);
// }

//     jupiterAgeCalc() {
//         let jupiterAge = this.nowAge / 12;
//         return jupiterAge.toFixed(2);
// }
};