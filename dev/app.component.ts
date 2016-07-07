import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        {{name}}
        <br>
        {{onTest()}}
        <input type="text" [value]="name" class="{{'red'}}">
        <br>
        <input type="text" [value]="name" [ngClass]="{red: true}" [disabled]="1 === 1">
        <br>
        <input type="text" [value]="name" [ngClass]="{red: true}" (keyup)="onKeyup(inputElement.value)" #inputElement>
        <p>{{values}}</p>
       
    `,
})
export class AppComponent {
    name = 'Matt';

    onTest()    {
        return 1 === 1;
    }

    onKeyup(value: string)   {
        this.values += value + ' | ';
    }
}