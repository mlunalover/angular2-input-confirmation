import {Component} from '@angular/core';

@Component({
    selector: 'my-property-binding',
    template:`
        <h2>This is the child component</h2>
        <p>Hey {{name}}!</p>
    `,
    inputs: ['name:myName']
})

export class PropertyBindingComponent   {
    name = '';
}