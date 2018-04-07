import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='transparent';
  @Input() highLightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseenter') mouseover(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    //this.backgroundColor='blue';
    this.backgroundColor=this.highLightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    //this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;
  }
}
