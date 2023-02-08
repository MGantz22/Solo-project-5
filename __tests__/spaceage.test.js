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

    test("should calculate age while on planet venus", () => {
        const presentAge = new SpaceAge(32);
        presentAge.venusAge();
        expect(presentAge.venusAge).toEqual(52);   
    });

    test("should calculate age while on planet mars", () => {
        const presentAge = new SpaceAge(32);
        presentAge.marsAge();
        expect(presentAge.marsAge).toEqual(17);
    }); 

    // test("should calculate age while on planet jupiter", () => {
    //     spaceAge.jupiter();
    //     expect(spaceAge.pastAge).toEqual(0); //refactor
    //     //expect(spaceAge.presentAge).toEqual(3);
    // //     expect(spaceAge.futureAge).toEqual(3); //refactor
    // });
});