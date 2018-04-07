import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my chat app';
  
  messages = [];
  
  name: string;
  message: string;

  sendMessage(){
    const message = {
      name: this.name,
      message: this.message
    };

    this.messages.push(message);
  }
}
