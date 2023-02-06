import SpaceAge from '../src/js/spaceage.js';

describe("SpaceAge", () => {
    let spaceAge;
    beforeEach(() => {
        spaceAge = new SpaceAge(32);
    });

    test("should correctly output current age on earth", () => {
        expect(spaceAge.presentAge).toEqual(32);
    });

    test("should calculate age in earth years while on planet mercury", () => {
        spaceAge.mercuryAge();
        expect(spaceAge.mercuryAge).toEqual(133.33.toFixed(2));
    });

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