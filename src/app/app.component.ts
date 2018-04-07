import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sec7 Directives';
  odd=[1,3,5];
  even=[2,4];
  oddonly=true;
  value=5;
}
