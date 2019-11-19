import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // document.querySelector('app-root); <app-root></app-root>
  template: `
    <h1
      [class.with-border]="withBorder"
      [style.color]="textColor"
      (mouseover)="onTextMouseOver()"
      (mouseout)="onTextMouseOut()">
        Welcome to {{title}}
    </h1>

    <button (click)="onButtonClick($event)">{{withBorder ? "Hide border" : "Show border"}}</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coder Tokyo';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  backgroundColor = 'black';

  styleObj = {color: this.textColor, background: this.backgroundColor};
  withBorder = true;

  onButtonClick(event: MouseEvent){
    console.log('Button clicked !!');
    this.withBorder = !this.withBorder;
  }

  onTextMouseOver(){
    this.textColor = 'yellow';
    console.log('1');
  }

  onTextMouseOut(){
    console.log('2');
    this.textColor = 'tomato';
  }
}

// DataBinding`
// 1. PropertyBinding
// 2. EventBinding
