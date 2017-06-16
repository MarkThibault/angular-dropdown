import * as angular from "angular";
import DropdownComponent from "./dropdown.component";
import DropdownButtonComponent from "./dropdown-button/dropdown-button.component";
import DropdownButtonGroupComponent from "./dropdown-button-group/dropdown-button-group.component";
import DropdownDividerComponent from "./dropdown-divider/dropdown-divider.component";
import DropdownTrigger from "./dropdown-trigger.directive";

angular.module("angularDropdownModule", [
    "ngAnimate"
    ])
    .component("angularDropdown", new DropdownComponent())
    .component("angularDropdownButton", new DropdownButtonComponent())
    .component("angularDropdownButtonGroup", new DropdownButtonGroupComponent())
    .component("angularDropdownDivider", new DropdownDividerComponent())
    .directive("angularDropdownTrigger", DropdownTrigger.Factory())
    .name;