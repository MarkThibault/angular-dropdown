export default class DropdownButtonGroupComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
            heading: "@"
        };
        this.controller = DropdownButtonGroupController;
        this.controllerAs = "dropdownButtonGroup";
        this.require = {
            dropdownController: "^angularDropdown"
        };
        this.templateUrl = require("./dropdown-button-group.component.html");
        this.transclude = true;
    }
}

export class DropdownButtonGroupController {
    heading: string;

    static $inject = [];
    constructor(
    ) {}
}