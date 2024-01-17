import { Directive, Input, HostBinding, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    fromButton: boolean = false;

    @Input() get appDropdown(): boolean {
        return this._appDropdown;
    }
     set appDropdown(value: boolean) {
        this._appDropdown = value;
        this.fromButton = true;
    }

    @Output() appDropdownChange = new EventEmitter<boolean>();

    private _appDropdown!: boolean; 

    constructor(private el: ElementRef) { }

    @HostBinding('class.drop') drop: boolean = false;

    @HostListener('document:click', ['$event']) click(event: Event) {
        let contained = false;
        contained = this.el.nativeElement.contains(event.target);
        if (this.fromButton) {
            this.drop = this._appDropdown;
        } else {
            this.drop = contained;
            this.appDropdownChange.emit(contained);
        }
        this.fromButton = false;
    }
}
