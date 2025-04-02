import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AccountComponent} from "./components/account/account.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, AccountComponent]
})
export class AppComponent {
  title = 'wishit';
}
