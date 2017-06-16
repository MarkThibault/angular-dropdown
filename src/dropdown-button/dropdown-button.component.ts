export default class DropdownButtonComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
            disable: "<",
            buttonClick: "&"
        };
        this.controller = DropdownButtonController;
        this.controllerAs = "dropdownButton";
        this.require = {
            dropdownController: "^angularDropdown"
        };
        this.templateUrl = require("./dropdown-button.component.html");
        this.transclude = true;
    }
}

export class DropdownButtonController {
    disable: boolean | Function;
    buttonClick: Function;

    static $inject = ["$rootScope"];
    constructor(
        private $rootScope: ng.IRootScopeService
    ) {}

    clickEvent() {
        this.$rootScope.$broadcast("resetAllDropdowns");
        this.buttonClick();
    }

    shouldDisable() {
        if (typeof this.disable === "function") {
            return this.disable();
        }
        else {
            return this.disable;
        }
    }
}