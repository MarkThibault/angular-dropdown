# Angular Dropdown

This is a dropdown component. 

## Getting Started

### Prerequisites

It is suggested to have "angular-animate" installed.

### Installing

```
Add the following to your dependencies:
"angular-dropdown": "git://github.com/MarkThibault/angular-dropdown.git",
```

### Usage

#### Inject into angular module:
```
angular
    .module("app", ["angularDropdownModule"])
```

#### Using the components:
```
Directive for trigger
<button angular-dropdown-trigger="DropdownId"></button>

Components
<angular-dropdown dropdown-id="DropdownId" scrollable-container-id="ScrollableContrainer">
    <angular-dropdown-button-group heading="Dropdown Header">
        <angular-dropdown-button button-click="app.buttonOne()" disable="true">Button 1</angular-dropdown-button>
        <angular-dropdown-button button-click="app.buttonTwo()" disable="">Button 2</angular-dropdown-button>
    </angular-dropdown-button-group>
    <angular-dropdown-divider></angular-dropdown-divider>
    <angular-dropdown-button button-click="app.buttonThree()" disable="">Button 3</angular-dropdown-button>
</angular-dropdown>

If dropdown(s) exist in a scrollable contrainer, an ID is required:
<div id="ScrollableContrainer">
    <div ng-repeat="item in array">
        <button angular-dropdown-trigger="DropdownId{{$index}}"></button>
        <angular-dropdown dropdown-id="DropdownId{{$index}}" scrollable-container-id="ScrollableContrainer">
            <angular-dropdown-button-group heading="Dropdown Header">
                <angular-dropdown-button button-click="app.buttonOne()" disable="true">Button 1</angular-dropdown-button>
                <angular-dropdown-button button-click="app.buttonTwo()" disable="">Button 2</angular-dropdown-button>
            </angular-dropdown-button-group>
            <angular-dropdown-divider></angular-dropdown-divider>
            <angular-dropdown-button button-click="app.buttonThree()" disable="">Button 3</angular-dropdown-button>
        </angular-dropdown>
    </div>
</div>
```

## Running the tests


## Deployment



## Built With


## Contributing

## Versioning

## Authors

## License

## Acknowledgments
