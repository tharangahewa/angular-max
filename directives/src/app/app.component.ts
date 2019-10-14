import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  count:number = 0; 
  displayText:boolean = false;
  clickHistory:Array<number> = [];

  onButtonClick( event:Event){
    this.count ++;
    this.toggleDisplay();
    this.clickHistory.push(this.count);
  }

  private toggleDisplay() {
    if (this.displayText) {
      this.displayText = false;
    }
    else {
      this.displayText = true;
    }
  }
}
