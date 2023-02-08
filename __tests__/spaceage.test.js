import SpaceAge from '../src/js/spaceage.js';

describe("SpaceAge", () => {

    test("should correctly output  prestent age on earth", () => {
        const presentAge = new SpaceAge(32);
        expect(presentAge.presentAge).toEqual(32);     
    });

        test("should calculate age If you were on planet mercury", () => {
        const presentAge = new SpaceAge(32);
        presentAge.mercuryAge();
        expect(presentAge.mercuryAge).toEqual(133);
    });

    // test("should calculate age while on planet venus", () => {
    //     spaceAge.venus();
    //     expect(spaceAge.pastAge).toEqual(3); // refactor
    //     //expect(spaceAge.presentAge).toEqual(52);
    //     //expect(spaceAge.futureAge).toEqual(70); //refactor
    // });

    // test("should calculate age while on planet mars", () => {
    //     spaceAge.mars();
    //     expect(spaceAge.pastAge).toEqual(1); //refactor
    //     //expect(spaceAge.presentAge).toEqual(17);
    // //     expect(spaceAge.futureAge).toEqual(23); //refactor
    // }); 

    // test("should calculate age while on planet jupiter", () => {
    //     spaceAge.jupiter();
    //     expect(spaceAge.pastAge).toEqual(0); //refactor
    //     //expect(spaceAge.presentAge).toEqual(3);
    // //     expect(spaceAge.futureAge).toEqual(3); //refactor
    // });
});