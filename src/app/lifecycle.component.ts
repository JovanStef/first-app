import { Component, OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>

    <p #boundParagraph>{{bindable}}</p>
  `,
  styles: [
  ]
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() bindable:number=1000;

  @ContentChild('boundContent') boundParagraph:HTMLElement;
  constructor() { }

  ngOnChanges(){
    this.log('ngOnChanges')
  }
  ngDoCheck(){
    this.log('ngDoCheck')

  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit')

  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')

  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')

  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
    console.log(this.boundParagraph)
  }
  ngOnDestroy(){
    this.log('ngOnDestroy')

  }
  ngOnInit(): void {
  }

  private log(hook:string){
    console.log(hook)
  }

}
