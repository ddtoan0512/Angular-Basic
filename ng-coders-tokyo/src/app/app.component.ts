import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-root', // document.querySelector('app-root); <app-root></app-root>
  template: `
    <h1 [class.with-border]="withBorder" [style.color]="textColor" >Welcome to {{title}}</h1>
    <button (click)="onButtonClick()">{{withBorder ? "Hide border" : "Show border"}}</button>
    <app-hello [text]="title" (buttonClicked)="onButtonClickFromHello($event)" ></app-hello>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {

  @Input() text: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  title = 'Coder Tokyo';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  withBorder = true;

    onButtonClickFromHello(event: string){
      console.log({event}, ' click from hello');
      this.title = event;
    }

    ngOnInit(): void {
      // console.log('Parent OnInit ran');
    }

    ngOnChanges(changes: SimpleChanges): void {
      // console.log('Parent OnChanges ran ', {changes});
    }

    ngOnDestroy(): void {
      // console.log('Parent OnDestroy ran');
    }

    ngAfterViewInit(): void {
      // console.log('Parent AfterViewInit ran');
    }

    ngAfterContentInit(): void {
      // console.log('Parent AfterContentInit ran');
    }

    ngAfterViewChecked(): void {
      // console.log('Parent AfterViewChecked ran');
    }

    ngAfterContentChecked(): void {
      // console.log('Parent AfterContentChecked ran');
    }

  onButtonClick(){
    this.withBorder = !this.withBorder;
    this.title = 'Changed';
  }


}

// DataBinding`
// 1. PropertyBinding
// 2. EventBinding
