import { Directive, Input, ElementRef, AfterViewInit, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[circlesLoader]'
})
export class CirclesLoaderDirective implements AfterViewInit, OnInit {

    @Input()
    public speed: number = 1;

    @Input()
    public size: string = 'xs';

    @Input()
    public isRunning: boolean = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }


    public ngOnInit() {

        const allowedSize: string[] = ['xs', 'sm', 'md', 'lg']; // @Note: Update if any new breakpoint size added
        this.size = (allowedSize.join(',').indexOf(this.size) > -1) ? this.size : 'xs';
    }

    public ngAfterViewInit() {

        const loaderContent: HTMLElement = document.createElement('div');

        loaderContent.innerHTML = `
        <div class="loaders-wrapper size-${this.size}">
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
        </div>
        `;

        this.renderer.appendChild(this.el.nativeElement, loaderContent);
    }

}
