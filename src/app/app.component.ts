import { Component } from '@angular/core';
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enterText='';
  randomtext:string= faker.lorem.sentence();

  refresh(){
    this.randomtext=faker.lorem.sentence();
    console.log(this.randomtext);
  }

  onInput(value:string){
    this.enterText=value;
  }

  compare(rl:string, el:string){
    if(!el){
      return 'vada';
    }
    return rl === el ? 'correct': 'incorrect';
  }
  
}
