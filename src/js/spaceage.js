export default class SpaceAge {
    constructor(presentAge, pastAge, futureAge) {
        this.presentAge = presentAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
    }

    mercuryAge() {
        let mercuryAge = this.presentAge / .24;
        this.mercuryAge = Math.round(mercuryAge);
    }

    venusAge() {
        let venusAge = this.presentAge / .62;
        this.venusAge = Math.round(venusAge);
    }

    marsAge() {
        let marsAge = this.presentAge / 1.88;
        this.marsAge = Math.round(marsAge);
    }

    jupiterAge() {
        let jupiterAge = this.presentAge / 11.86;
        this.jupiterAge = Math.round(jupiterAge);
    }

    yearsSince() {
        let difference = presentAge - pastAge;
        let earthDifference = (Math.round(difference) + " Earth years, ");
        let mercDifference = ((difference / .24).toFixed(2) + " Mercury years, ");
        let venuDifference = ((difference / .62).toFixed(2) + " Venus years, ");
        let marsDifference = ((difference / 1.88).toFixed(2) + " Mars years, ");
        let jupDifference = ((difference / 11.86).toFixed(2) + " Jupiter years.");
        return earthDifference + mercDifference + venuDifference + marsDifference + jupDifference;
    }

    yearsUntil() {
        let difference = futureAge - presentAge;
        let earthDifference = (Math.round(difference) + " Earth years, ");
        let mercDifference = ((difference / .24).toFixed(2) + " Mercury years, ");
        let venuDifference = ((difference / .62).toFixed(2) + " Venus years, ");
        let marsDifference = ((difference / 1.88).toFixed(2) + " Mars years, ");
        let jupDifference = ((difference / 11.86).toFixed(2) + " Jupiter years.");
        return earthDifference + mercDifference + venuDifference + marsDifference + jupDifference;
    }
};