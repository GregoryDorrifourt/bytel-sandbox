import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[btlSvg]' })

export class SvgDirective implements AfterViewInit {

    /**
     * [Input description]
     * @return {[type]} [description]
     */
    @Input()
    public role: string;
    /**
     * [Input description]
     * @return {[type]} [description]
     */
    @Input()
    public title: string;
    /**
     * [Input description]
     * @return {[type]} [description]
     */
    @Input()
    public file: string;
    /**
     * [Input description]
     * @return {[type]} [description]
     */
    @Input()
    public name: string;
    /**
     * [Input description]
     * @return {[type]} [description]
     */
    @Input()
    public class: string;

    /**
     *
     * @param el
     */
    constructor(private el: ElementRef) {
    }
    /**
     * [ngAfterViewInit description]
     * @return {[type]} [description]
     */
    public ngAfterViewInit() {

        const nodeParent = this.el.nativeElement.parentNode;
        nodeParent.removeChild(this.el.nativeElement);

        if (!this.role) {
            this.role = 'img';
        }

        if (!this.title) {
            this.title = ' ';
        }

        const xhref: string = `./assets/svgs-def/${this.file}.svg#${this.name}`;
        nodeParent.innerHTML = `<svg role="${this.role}" title="${this.title}" class="${this.class}">
        <use xlink:href="${xhref}"></use></svg>`;

    }
}
