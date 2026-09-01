import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }
}