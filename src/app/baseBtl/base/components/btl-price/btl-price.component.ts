import {Input, OnInit} from '@angular/core';

export class BtlPriceComponentBase implements OnInit {

    @Input()
    price: number;

    @Input()
    promoPrice: number;

    @Input()
    oldPrice: number = null;

    @Input()
    showPromoPrice: boolean = true;

    @Input()
    monthly: boolean = false;

    @Input()
    position: string = 'left';

    public priceFormatted: string[] = [];

    public oldPriceFormatted: string[] = [];

    private readonly OLD_PRICE_POSITION_SUFFIX: string = 'old-price';

    public ngOnInit() {

        if(typeof this.price === 'undefined'){
            throw Error('You must at least set price attribute');
        }

        if(typeof this.promoPrice !== 'undefined'){
            this.priceFormatted = this.splitPrice(this.promoPrice);
            this.oldPriceFormatted = this.splitPrice(this.price);
        } else {
            this.priceFormatted = this.splitPrice(this.price);
        }

        if(this.oldPrice !== null && typeof this.oldPrice !== 'undefined'){
            this.oldPriceFormatted = this.splitPrice(this.oldPrice);
            this.position = this.OLD_PRICE_POSITION_SUFFIX;
        }
    }

    private splitPrice(price : number) : string[] {
        return parseFloat(price.toString()).toFixed(2).split('.');
    }
}
