import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        {{name}}
        <br>
        {{onTest()}}
        <input type="text" value="{{name}}">
       
    `,
})
export class AppComponent {
    name = 'Matt';

    onTest()    {
        return 1 === 1;
    }
}