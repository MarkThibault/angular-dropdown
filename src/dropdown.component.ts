export default class DropdownComponent implements ng.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {
            dropdownId: "@",
            scrollableContainerId: "@"
        };
        this.controller = DropdownController;
        this.controllerAs = "dropdown";
        this.templateUrl = require("./dropdown.component.html");
        this.transclude = true;
    }
}

export class DropdownController {
    dropdownId: string;
    showDropdown: boolean;
    scrollableContainerId: string;

    private documentClick: any;
    private dropdownElement: JQuery;
    private onReset: any;
    private onToggle: any;
    private scrollableContrainer: JQuery;
    private triggerElement: JQuery;
    private triggerPosition: JQueryCoordinates;

    static $inject = ["$document", "$rootScope", "$scope", "$timeout"];
    constructor(
        private $document: ng.IDocumentService,
        private $rootScope: ng.IRootScopeService,
        private $scope: ng.IScope,
        private $timeout: ng.ITimeoutService
    ) { }

    $onInit() {
        this.showDropdown = false;
        this.documentClick = {};
        this.onToggle = this.$rootScope.$on("toggleDropdown" + this.dropdownId, () => {
            window.document.removeEventListener("click", this.documentClick[this.dropdownId]);
            this.toggleDropdown();
            this.$scope.$apply();
        });
        this.onReset = this.$rootScope.$on("resetAllDropdowns", () => {
            this.resetDropdown();
        });
        this.$timeout(() => {
            if (this.scrollableContainerId) {
                this.scrollableContrainer = $("#" + this.scrollableContainerId);
            }
            this.dropdownElement = $("#" + this.dropdownId);
            this.triggerElement = $("[angular-dropdown-trigger='" + this.dropdownId + "']");
            this.dropdownElement.click((event) => {
                event.stopPropagation();
            });
        }, 0);
    }

    $onDestroy() {
        this.onToggle();
        this.onReset();
    }

    private resetDropdown() {
        this.showDropdown = false;
        window.document.removeEventListener("click", this.documentClick[this.dropdownId]);
        if (this.scrollableContrainer) {
            this.scrollableContrainer.unbind("scroll");
        }
    }

    private toggleDropdown() {
        this.documentClick[this.dropdownId] = () => {
            this.resetDropdown();
            this.$scope.$apply();
        };
        if (this.showDropdown === true) {
            this.resetDropdown();
        }
        else {
            this.setDropdown();
            this.$rootScope.$broadcast("resetAllDropdowns");
            this.showDropdown = true;
            this.$timeout(() => {
                this.triggerPosition = this.triggerElement.offset();
                this.setDropdownTopBottom();
                this.setDropdownLeftRight();
                if (this.scrollableContrainer) {
                    this.scrollableContrainer.bind("scroll", () => {
                        this.setDropdown();
                    });
                }
                window.document.addEventListener("click", this.documentClick[this.dropdownId]);
                window.addEventListener("resize", ()=> {
                    if  (this.showDropdown) {
                        this.setDropdown();
                    }
                });
            }, 0);
        }
    }

    private setDropdown() {
        this.triggerPosition = this.triggerElement.offset();
        this.setDropdownTopBottom();
        this.setDropdownLeftRight();
    }

    private setDropdownTopBottom() {
        const triggerBottom = this.triggerPosition.top + this.triggerElement.outerHeight() - 3;
        const dropdownHeight = this.dropdownElement.outerHeight();
        const dropdownBottom = triggerBottom + dropdownHeight;

        // check if in scrollable contrainer
        if (
            this.scrollableContrainer && (
                triggerBottom <= this.scrollableContrainer.offset().top || this.triggerPosition.top >= (this.scrollableContrainer.offset().top + this.scrollableContrainer.outerHeight())
            )
        ) {
            this.resetDropdown();
            this.$scope.$apply();
        }

        // set top position
        let dropdownTop = 0;
        if (dropdownBottom >= $(window).height()) {
            dropdownTop = this.triggerPosition.top - dropdownHeight + 3;
        } else {
            dropdownTop = triggerBottom;
        }
        this.dropdownElement.css("top", dropdownTop + "px");
    }

    private setDropdownLeftRight() {
        const triggerRight = this.triggerPosition.left + this.triggerElement.outerWidth();
        const windowWidth = $(window).width();
        if (windowWidth <= triggerRight + this.dropdownElement.outerWidth()) {
            this.dropdownElement.css("right", windowWidth - triggerRight + "px");
        } else {
            this.dropdownElement.css("left", this.triggerPosition.left + "px");
        }
    }
}