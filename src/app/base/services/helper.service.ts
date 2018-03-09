import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    constructor() { }

    /**
     * @var formPatterns
     * @description Patterns for forms validation.
     * @type {}
     */
    public formPatterns = {
        'EMAIL': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'PHONE_NUMBER': /^0[1-9]{1}[0-9]{8}$/,
        'MOBILE_PHONE_NUMBER': /^0[6-7]{1}[0-9]{8}$/
    }

}
