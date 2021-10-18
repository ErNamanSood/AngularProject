import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// controller where we will write our business logic
// i.e algo will be coded here
// it weill use model to hold and process data

export class AppComponent {

  // Model -> Single Value Container call String
  // Model which are holding data for us :) 
  title = 'angular';

  // Model -> Multi Value Container called Object

  profile = {
    name: 'John Watson',
    email: 'John@example.com',
    age: 21
  };
}
