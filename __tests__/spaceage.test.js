import SpaceAge from '../src/js/spaceage.js';

describe("SpaceAge", () => {
    let spaceAge;
    beforeEach(() => {
        spaceAge = new SpaceAge(2, 32, 44);
    });

    test("should correctly output age on earth", () => {
        //expect(spaceAge.pastAge).toEqual(2); //refactor
        expect(spaceAge.presentAge).toEqual(32);
        //expect(spaceAge.futureAge).toEqual(44); //refactor
    });

    test("should calculate age If you were on planet mercury", () => {
        spaceAge.mercury();
        //expect(spaceAge.pastAge).toEqual(8); //refactor
        expect(spaceAge.presentAge).toEqual(133);
        //expect(spaceAge.futureAge).toEqual(183); //refactor
    });

    test("should calculate age while on planet venus", () => {
        spaceAge.venus();
        //expect(spaceAge.pastAge).toEqual(3); // refactor
        expect(spaceAge.presentAge).toEqual(52);
        //expect(spaceAge.futureAge).toEqual(70); //refactor
    });

    test("should calculate age while on planet mars", () => {
        spaceAge.mars();
    //     expect(spaceAge.pastAge).toEqual(1); //refactor
        expect(spaceAge.presentAge).toEqual(17);
    //     expect(spaceAge.futureAge).toEqual(23); //refactor
    }); 

    test("should calculate age while on planet jupiter", () => {
        spaceAge.jupiter();
    //     expect(spaceAge.pastAge).toEqual(0); //refactor
        expect(spaceAge.presentAge).toEqual(3);
    //     expect(spaceAge.futureAge).toEqual(3); //refactor
    });
});