import { Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';

export interface MediaQuerySizes {
    lg: string;
    sm: string;
}

export class StickyDirectiveBase implements AfterViewInit {

    /**
     * [Input description]
     * @return {[type]} [description]
     */
    @Input('btl-sticky')
    top: string;

    @Input('sm-only')
    smOnly: boolean = false;

    @Input('lg-only')
    lgOnly: boolean = false;

    @Input()
    adaptative: boolean = false;

    @HostListener('click', [])
    @HostListener('window:resize', ['$event'])
    refreshTopValue() {
        if(this.adaptative && !this.isIE) {
            this.setTopValue();
        }
    }

    private mq: MediaQueryList;

    private isIE: boolean;

    protected document: Document;

    /**
     *
     * @param {ElementRef} el
     */
    constructor(protected el: ElementRef) {
        this.document = el.nativeElement.ownerDocument;
    }

    /**
     * [ngAfterViewInit description]
     * @return {[type]} [description]
     */
    public ngAfterViewInit(): void {

        const mediaQuerySizes: MediaQuerySizes = Object.freeze({
            lg: '(min-width: 992px)',
            sm: '(max-width: 991px)'
        });

        if(this.smOnly || this.lgOnly) {
            this.mq = this.document.defaultView.matchMedia(this.smOnly ? mediaQuerySizes.sm:mediaQuerySizes.lg);
        }

        if(typeof this.mq === 'undefined' || this.mq.matches){

            const uniqueClass: string = `sticky-${Math.random().toString().slice(2)}`;

            this.isIE = /msie\s|trident\/|edge\//i.test(this.document.defaultView.navigator.userAgent);

            this.el.nativeElement.classList.add(uniqueClass);

            if(this.isIE) {
                (this.document.defaultView as any).Stickyfill.add(this.el.nativeElement);

                setTimeout(()=>{
                    (this.document.defaultView as any).Stickyfill.refreshAll();
                }, 1000)

            } else {
                this.el.nativeElement.style.position = 'sticky';
                this.setTopValue(this.adaptative ? '':(this.top || '0'));
            }
        }

    }

    public setTopValue(value?: string): void {
        let top: string = '0';

        if(typeof value !== 'undefined' && value){
            top = value;
        } else {
            let childMaxHeight = 0;
            for(let i in this.el.nativeElement.children){
                if(this.el.nativeElement.children[i].clientHeight > childMaxHeight){
                    childMaxHeight = this.el.nativeElement.children[i].clientHeight;
                }
            }
            let diff: number = this.document.defaultView.innerHeight - childMaxHeight;
            top = diff < 0 ? `${diff}px`:top;
        }

        this.el.nativeElement.style.top = top;
    }
}
