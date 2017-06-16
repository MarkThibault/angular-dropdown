interface DropdownTriggerAttrs extends ng.IAttributes {
    angularDropdownTrigger: string;
}

export default class DropdownTrigger implements ng.IDirective {
    public link: ng.IDirectiveLinkFn;
    public restrict: string;

    constructor(
        private $rootScope: ng.IRootScopeService
    ) {
        this.restrict = "A";
        DropdownTrigger.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: DropdownTriggerAttrs) => {
            element.bind("click", () => {
                this.$rootScope.$broadcast("toggleDropdown" + attrs.angularDropdownTrigger);
            });
        };
    }

    public static Factory() {
        const directive = ($rootScope) => new DropdownTrigger($rootScope);
        directive["$inject"] = ["$rootScope"];
        return directive;
    }
}