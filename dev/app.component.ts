import {Component} from '@angular/core';
import {InputComponent} from "./bindings/input.component";

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <my-input></my-input>
        </div>
        <div class="container">
            ...
        </div>
    `
    directives: [InputComponent]
})
export class AppComponent {
    myself = {name: '', age: ''};
    confirmedMyself = {name: '', age: ''};
}