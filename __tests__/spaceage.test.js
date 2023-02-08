import SpaceAge from '../src/js/spaceage.js';

describe("SpaceAge", () => {

    test("should correctly output prestent age on planet Earth", () => {
        const presentAge = new SpaceAge(32);
        expect(presentAge.presentAge).toEqual(32);     
    });

    test("should calculate age on planet Mercury", () => {
        const presentAge = new SpaceAge(32);
        presentAge.mercuryAge();
        expect(presentAge.mercuryAge).toEqual(133);
    });

    test("should calculate age on planet Venus", () => {
        const presentAge = new SpaceAge(32);
        presentAge.venusAge();
        expect(presentAge.venusAge).toEqual(52);   
    });

    test("should calculate age on planet Mars", () => {
        const presentAge = new SpaceAge(32);
        presentAge.marsAge();
        expect(presentAge.marsAge).toEqual(17);
    }); 

    test("should calculate age on planet Jupiter", () => {
        const presentAge = new SpaceAge(32);
        presentAge.jupiterAge();
        expect(presentAge.jupiterAge).toEqual(3); 
    });

    test("Should calculate how many years have pasted since last entered birthday", () => {
        const presentAge = new SpaceAge(32,12);
        presentAge.yearsSince();
        expect(presentAge.yearsSince(32,12)).toBe("20 Earth years, 83.33 Mercury years, 32.26 Venus years, 10.64 Mars years, 1.69 Jupiter years.")
    });

    test("Should calculate how many years have yet to pass since last entered birthday", () => {
        const presentAge = new SpaceAge(32,42);
        presentAge.yearsUntil();
        expect(presentAge.yearsUntil(32,42)).toBe("10 Earth years, 41.67 Mercury years, 16.13 Venus years, 5.32 Mars years, 0.84 Jupiter years.")
    });

});