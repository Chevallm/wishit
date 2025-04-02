import {Component} from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {RouterLink} from "@angular/router";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ButtonComponent, RouterLink]
})
export class HomeComponent {

}
