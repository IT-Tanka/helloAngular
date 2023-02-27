import { Element } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'check strength of the password';
  Check(event:any): void {
    const boxes:NodeListOf<HTMLDivElement>=document.querySelectorAll('.test-box');
    const password:string=event.target.value;
    if (password.length === 0){
      boxes.forEach((box) => box.style.backgroundColor='grey'
     );
    }
    if (password.length < 8 && password.length !== 0){
      boxes.forEach((box) => box.style.backgroundColor='red'
     );
    }
    if (password.length >= 8){
      if (/^[0-9]+$/.test(password) 
      || /^[a-zA-Z]+$/.test(password) 
      || /^[`~+,.:"?(){}!@#$%^&*-/\\/]+$/.test(password)
      )
      {
        boxes[0].style.backgroundColor='red';
        boxes[1].style.backgroundColor='grey';
        boxes[2].style.backgroundColor='grey';
      }
  
      else if 
        (
        /^[a-zA-Z0-9]+$/.test(password) && !(/^[`~+,.:"?(){}!@#$%^&*-/\\/]+$/.test(password))
        ||  /^[a-zA-Z`~+,.:"?(){}!@#$%^&*-/\\/]+$/.test(password) && !(/^[0-9]+$/.test(password)) 
        || /^[0-9`~+,.:"?(){}!@#$%^&*-/\\/]+$/.test(password) && !(/^[a-zA-Z]+$/.test(password))
        )  
        {
          boxes[0].style.backgroundColor='yellow';
          boxes[1].style.backgroundColor='yellow';
          boxes[2].style.backgroundColor='grey';
        }
    
        else if (/^[0-9a-zA-Z`~+,.:"?(){}!@#$%^&*-/\\/]+$/.test(password)) 
          boxes.forEach((box) => box.style.backgroundColor='green')
    } 
  }
}