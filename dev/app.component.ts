import {Component} from '@angular/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <my-input (submitted)="onSubmit($event)"></my-input>
        </div>
        <div class="container">
            <my-confirm (confirmed)="onConfirm($event)"></my-confirm>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {
    myself = {name: '', age: ''};
    confirmedMyself = {name: '', age: ''};

    onSubmit(myself: {name: string, age: string})  {
        this.myself = myself;
    }

    onConfirm(myself: {name: string, age: string}) {
        this.confirmedMyself = myself;
    }
}