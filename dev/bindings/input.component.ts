import {Component} from "@angular/core";

@Component({
    selector: 'my-input',
    template: `
        <h2>Your details, please</h2>
        <div>
            <label for="name">Your Name</label>
            <input type="text"id="name">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text"id="age">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid">Submit</button>
    `
})

export class InputComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
}