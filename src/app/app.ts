import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  colors = signal<string[]>([]);
  fnum = signal('');
  snum = signal('');
  result = signal('');
  count = signal(0);
  history = signal<number[]>([0]);


  countIncrement(): void {
    this.count.update(n => { 
      const newCount = n + 1;
      this.history.update(list => [...list, newCount]);
      return newCount;
    }
     );
    
  }

  countdecrease() {
    this.count.update(n => {
      const newCount =  n - 1;
      this.history.update(list => [...list, newCount]);
      return newCount;
    });
  }

  countreset() {
    this.count.set(0);
    this.history.set([0]);
  }

  addColor(color: string): void {
    this.colors.update(list => [...list, color]);
  }

  resetColor(): void {
    this.colors.set([]);
  }

  

  addNumb(): void {
    this.result.set(`${(+this.fnum()) + (+this.snum())}`);
  }

  mulNumb(): void {
    this.result.set(`${(+this.fnum()) * (+this.snum())}`);
  }

  difNumb(): void {
    this.result.set(`${(+this.fnum()) - (+this.snum())}`);
  }

  quoNumb(): void {
    this.result.set(`${(+this.fnum()) / (+this.snum())}`);
  }
}sda