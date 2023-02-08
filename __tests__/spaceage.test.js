import SpaceAge from '../src/js/spaceage.js';

describe("SpaceAge", () => {

    test("should correctly output prestent age on planet Earth", () => {
        const presentAge = new SpaceAge(32);
        expect(presentAge.presentAge).toEqual(32);     
    });

    test("should calculate age If you were on planet Mercury", () => {
        const presentAge = new SpaceAge(32);
        presentAge.mercuryAge();
        expect(presentAge.mercuryAge).toEqual(133);
    });

    test("should calculate age while on planet Venus", () => {
        const presentAge = new SpaceAge(32);
        presentAge.venusAge();
        expect(presentAge.venusAge).toEqual(52);   
    });

    test("should calculate age while on planet Mars", () => {
        const presentAge = new SpaceAge(32);
        presentAge.marsAge();
        expect(presentAge.marsAge).toEqual(17);
    }); 

    test("should calculate age while on planet Jupiter", () => {
        const presentAge = new SpaceAge(32);
        presentAge.jupiterAge();
        expect(presentAge.jupiterAge).toEqual(3); 
    });
});