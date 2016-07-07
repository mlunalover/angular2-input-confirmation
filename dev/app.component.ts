import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        {{name}}
        <br>
        {{onTest()}}
        <input type="text" [value]="name" class="{{'red'}}">
        
        <input type="text" [value]="name" [ngClass]="{red: true}" [disabled]="1 === 1">
       
    `,
})
export class AppComponent {
    name = 'Matt';

    onTest()    {
        return 1 === 1;
    }
}