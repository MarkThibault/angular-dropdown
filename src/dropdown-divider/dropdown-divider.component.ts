export default class DropdownDividerComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    require: any;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
        };
        this.controller = DropdownDividerController;
        this.controllerAs = "dropdownDivider";
        this.require = {
            dropdownController: "^angularDropdown"
        };
        this.templateUrl = require("./dropdown-divider.component.html");
        this.transclude = true;
    }
}

export class DropdownDividerController {
    static $inject = [];
    constructor() {}
}