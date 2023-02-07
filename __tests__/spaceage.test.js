import SpaceAge from '../src/js/spaceage.js';

describe("SpaceAge", () => {
    let spaceAge;
    beforeEach(() => {
        spaceAge = new SpaceAge(2, 32, 44);
    });

    test("should correctly output current age on earth", () => {
        //expect(spaceAge.pastAge).toEqual(2); //refactoring
        //expect(spaceAge.presentAge).toEqual(32);
        expect(spaceAge.futureAge).toEqual(44); //refactoring
    });

    //test("should calculate present age If you were on planet mercury", () => {
        //spaceAge.mercury();
        //expect(spaceAge.pastAge).toEqual(2); //refactoring
        //expect(spaceAge.presentAge).toEqual(133);
        //expect(spaceAge.futureAge).toEqual(44); //refactoring.
    //});

    // test("should calculate age in earth years while on planet venus", () => {
    //     const spaceage = new Spaceage(32, 32, 32);
    //     expect(spaceage.venusAgeCalc()).toEqual(52.03.toFixed(2));
    // });

    // test("should calculate age in earth years while on planet mars", () => {
    //     const spaceage = new Spaceage(32, 32, 32, 32);
    //     expect(spaceage.marsAgeCalc()).toEqual(17.02.toFixed(2));
    // });

    // test("should calculate age in earth years while on planet jupiter", () => {
    //     const spaceage = new Spaceage(32, 32, 32, 32, 32);
    //     expect(spaceage.jupiterAgeCalc()).toEqual(2.67.toFixed(2));
    // });
});