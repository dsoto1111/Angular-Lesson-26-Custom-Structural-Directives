import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    offsetHeight!: string;

    buttonStyle = {display: 'block',
                   margin: 'auto',
                   width: '10%'};

    toggle: boolean = false;
}
