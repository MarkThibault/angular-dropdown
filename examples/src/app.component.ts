const template = require("./app.component.html");

export default class AppComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {};
        this.transclude = true;
        this.controller = AppController;
        this.controllerAs = "app";
        this.templateUrl = template;
    }
}

export class AppController {
    testText = "Yay!";
    dropdowns = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 },
        { id: 26 },
        { id: 27 },
        { id: 28 },
        { id: 29 },
        { id: 30 },
        { id: 31 },
        { id: 32 }
    ];
    dropdownsTwo = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 },
        { id: 26 },
        { id: 27 },
        { id: 28 },
        { id: 29 },
        { id: 30 },
        { id: 31 },
        { id: 32 }
    ];
    filter: any;

    static $inject = [];
    constructor(
    ) {
    }

    setFilter() {
        console.log(this.filter)
        if (!this.filter) {
            this.filter = { id: 1 };
        }
        else if (this.filter.id === 1) {
            this.filter.id = 2
        }
        else {
            this.filter.id = 1
        }
        console.log(this.filter)        
    }

    buttonOne(index) {
        console.log(this.testText + " button 1 - index: " + index);
    }

    buttonTwo(index) {
        console.log(this.testText + " button 2 - index: " + index);
    }

    buttonThree(index) {
        console.log(this.testText + " button 3 - index: " + index);
    }
}