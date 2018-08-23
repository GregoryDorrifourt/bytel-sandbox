
import { Input, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class SvgDirectiveBase implements AfterViewInit {
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
     * [Input description]
     * @return {[type]} [description]
     */
    @Input()
    public isGradientType: boolean;

    protected sufixUrl: string = 'v2';
    /**
     *
     * @param el
     */
    @Inject(DOCUMENT) protected document: Document;

    constructor(
        protected el: ElementRef
    ) {}

    /**
     * [ngAfterViewInit description]
     * @return {[type]} [description]
     */
    public ngAfterViewInit() {

        const nodeParent = this.el.nativeElement.parentNode;
        nodeParent.removeChild(this.el.nativeElement);
        const isGradientCompatible = (window as any).isExternalSvgCompatible;

        if (!this.role) {
            this.role = 'img';
        }

        if (!this.title) {
            this.title = '';
        }

        if (!this.isGradientType) {

            const xhref: string = `${this.sufixUrl}/assets/svgs-def/${this.file}.svg#${this.name}`;
            nodeParent.innerHTML = `<svg role="${this.role}" title="${this.title}" class="icon ${this.class}">
            <use xlink:href="${xhref}"></use></svg>`;
        } else if (!isGradientCompatible || this.isGradientType) {

            const svgSymbol: Element = window.document.querySelector(`#${this.name}`);
            // focusable="false" is useful to avoid screenreader to read and IE to focus on the svg
            const svgContent: string = `
            <svg 'aria-hidden="false" focusable="false"' : ''}
            class="icon ${this.class}"
            ${this.addSvgProperties(svgSymbol)} role="${this.role}" xml:space="preserve">
            <title>${this.title}</title>
            ${this.editAttributeUrl(svgSymbol.innerHTML)}
            </svg>`;
            nodeParent.innerHTML = svgContent;
        }
    }

     /**
     * Retrieves properties from element (SVG) and add basic svg properties on the element
     *
     * @protected
     * @param {*} element
     * @returns {string}
     * @memberof SvgDrawDirective
     */
    protected addSvgProperties(element: Element): string {

        const viewBox: {[key: string]: string|number} = (element as any).viewBox.baseVal; // @TODO: Fix this
        const bgEnable = `style="enable-background:new ${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}"`;
        const xmlns = `xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"`;

        return `version="1.1" ${xmlns} width="100%" height="100%" style="${bgEnable};" viewBox="${viewBox.x} ${viewBox.y}
        ${parseFloat(viewBox.width.toString()).toFixed(2)} ${parseFloat(viewBox.height.toString()).toFixed(2)}"`;
    }

    /**
     *
     * Change the url of all attribute to polyfill unsupported browser i.e SAFARI
     * @private
     * @param {string} svgData
     * @returns {string}
     * @memberof SvgDirectiveBase
     */
    private editAttributeUrl(svgData: string): string {

        if (!svgData) {
            return '';
        }
        const absUrl = window.location.href;
        const data = svgData
        .replace(/url\(#/gi, `url(${absUrl}#`);
        return data;
    }
}
