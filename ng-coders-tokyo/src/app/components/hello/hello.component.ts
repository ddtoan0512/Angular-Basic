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
  selector: 'app-hello',
  template: `
    <h2>hello from hello component</h2>
    <p>{{ text }} from parent</p>

    <button (click)="onButtonClicked()" >Button in Hello</button>
  `
})

export class HelloComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked{
  @Input() text: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  title = 'Coder Tokyo';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  withBorder = true;

    onButtonClicked(){
      this.text = 'Changed from Hello Component';
      this.buttonClicked.emit(this.text);
    }

    ngOnInit(): void {
      console.log('Child OnInit ran');
    }

    ngOnChanges(changes: SimpleChanges): void {
      // console.log('Child OnChanges ran ', {changes});
    }

    ngOnDestroy(): void {
      // console.log('Child OnDestroy ran');
    }

    ngAfterViewInit(): void {
      // console.log('Child AfterViewInit ran');
    }

    ngAfterContentInit(): void {
      // console.log('Child AfterContentInit ran');
    }

    ngAfterViewChecked(): void {
      // console.log('Child AfterViewChecked ran');
    }

    ngAfterContentChecked(): void {
      // console.log('Child AfterContentChecked ran');
    }

}
