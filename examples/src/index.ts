require("./app.component.scss");
require("./favicon.png");

import * as angular from "angular";
import "../../dist/angular-dropdown";
import AppComponent from "./app.component";

angular
    .module("app", ["angularDropdownModule"])
    .component("app", new AppComponent());