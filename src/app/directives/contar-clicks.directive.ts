import { Directive, HostListener } from "@angular/core";

@Directive({
    selector : 'a[contar-clicks]'
})
export class ContarClcksDirective{
    clickN:number = 1;
    @HostListener('click', ['$event.target']) onclick(btn) {
        console.log('a', btn, 'Numero de clicks', this.clickN++);
    }
}