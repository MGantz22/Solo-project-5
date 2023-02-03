import Spaceage from '../src/js/spaceage.js';

describe('Spaceage', () => {

    test("should correctly create a spaceage object with an age property", () => {
        const spaceage = new Spaceage(32);
        expect(spaceage.earthAge).toEqual(32);
    });

    test("should calculate age in earth years while on planet mercury", () => {
        const spaceage = new Spaceage(32, 32);
        expect(spaceage.mercuryAgeCalc()).toEqual(133.333333333)
    });
});