export default class SpaceAge {
    constructor(pastAge, presentAge, futureAge) {
        this.pastAge = pastAge;
        this.presentAge = presentAge;
        this.futureAge = futureAge;
}

mercury() {
    this.presentAge = Math.round(this.presentAge / 0.24);
}

venus() {
    this.presentAge = Math.round(this.presentAge / 0.62);
}

mars() {
    this.presentAge = Math.round(this.presentAge / 1.88);
}

jupiter() {
    this.presentAge = Math.round(this.presentAge / 11.86);
}

//yearsUntilBday() {
    //??? TBD 
//}
//yearsSinceBday() {
    //??? TDB
//}
};