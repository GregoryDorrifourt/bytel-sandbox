import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { HelperService } from "../base/services/helper.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-dad',
    templateUrl: './dad.component.html',
    styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit, OnChanges {

    formData: FormGroup;
    formTest: FormGroup;

    private PATTERNS: Object;

    companies: Array<{}> = [
        {value: "", label: "-- Sélectionner un partenaire --"},
        {value: "company_1", label: "Company 1"},
        {value: "company_2", label: "Company 2"},
        {value: "company_3", label: "Company 3"},
        {value: "company_4", label: "Company 4"},
        {value: "company_5", label: "Company 5"}
    ];

    departments: Array<{}> = [
        {value:"", label: "-- Sélectionner un département --"},
        {value:"01", label: "Ain"}
    ];

    constructor(public fb: FormBuilder, private helper: HelperService) {
        this.PATTERNS = helper.formPatterns;
    }

    ngOnInit() {
        this.formTest = this.fb.group({
            testfixe: ['', [Validators.required, Validators.pattern(this.PATTERNS['PHONE_NUMBER'])]],
            testmobile: ['', [Validators.required, Validators.pattern(this.PATTERNS['MOBILE_PHONE_NUMBER'])]]
        });

        this.formData = this.fb.group({
            //Form part 1
            contract_id:                ['', Validators.required],
            company_name:               ['', Validators.required],
            seller_id:                  ['', Validators.required],
            contract_signed_at:         ['', Validators.required],

            // Form part 2
            type_client:                ['', Validators.required],
            prefix:                     ['', Validators.required],
            lastname:                   ['', Validators.required],
            firstname:                  ['', Validators.required],
            birth_date:                 ['', Validators.required],
            birth_department:           ['', Validators.required],
            mobile:                     ['', [Validators.required, Validators.pattern(this.PATTERNS['MOBILE_PHONE_NUMBER'])]],
            fixe:                       ['', [Validators.required, Validators.pattern(this.PATTERNS['PHONE_NUMBER'])]],
            email:                      ['', [Validators.required, Validators.pattern(this.PATTERNS['EMAIL'])]],
            identity_document:          ['', Validators.required],
            identity_document_number:   ['', Validators.required],

            //Form part 3
            keep:                       ['', Validators.required],
            keep_number:                '',
            annuaire_universel:         '',
            anti_prospection:           '',
            sans_adresse_complete:      '',
            sans_prenom_complet:        '',
            anti_annuaire_inverse:      '',
            controle_parental:          '',

            //Form part 4
            address:                    ['', Validators.required],
            building:                   '',
            stage:                      '',
            stairs:                     '',
            city:                       ['', Validators.required],
            postal_code:                ['', Validators.required],
            pto:                        '',

            //Form part 5
            offer:                      ['', Validators.required],

            //Form part 6
            payment_method:             ['', Validators.required]
        });
    }

    get testfixe() { return this.formTest.get('testfixe');}
    get testmobile() { return this.formTest.get('testmobile');}

    get contract_id() { return this.formData.get('contract_id');}

    get company_name() { return this.formData.get('company_name');}

    get seller_id() { return this.formData.get('seller_id');}

    get contract_signed_at() { return this.formData.get('contract_signed_at');}

    get type_client() { return this.formData.get('type_client');}

    get prefix() { return this.formData.get('prefix');}

    get lastname() {return this.formData.get('lastname');}

    get firstname() {return this.formData.get('firstname');}

    get birth_date() {return this.formData.get('birth_date');}

    get birth_department() {return this.formData.get('birth_department');}

    get mobile() {return this.formData.get('mobile');}

    get fixe() {return this.formData.get('fixe');}

    get email() {return this.formData.get('email');}

    get identity_document() {return this.formData.get('identity_document');}

    get identity_document_number() {return this.formData.get('identity_document_number');}

    get keep() {return this.formData.get('keep');}

    get keep_number() {return this.formData.get('keep_number');}

    get address() {return this.formData.get('address');}

    get city() {return this.formData.get('city');}

    get postal_code() {return this.formData.get('postal_code');}

    get offer() {return this.formData.get('offer');}

    get payment_method() {return this.formData.get('payment_method');}

    /**
     * @function submitForm
     */
    submitForm() {

    }

    /**
     * @function rbChange
     * @description Fixes bootstrap issue. Label click is not triggering change event for radio button.
     * @param input
     * @param value
     */
    rbChange(input, value){
        this.formData.value[input] = value;
    }

    /**
     * Detect changes and update fields validity
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges) {

        this.formTest.valueChanges
            .subscribe((data) => {
                if(this.testfixe.valid){
                    this.testmobile.setValidators(Validators.pattern(this.PATTERNS['MOBILE_PHONE_NUMBER']));
                }
            });
    }

}
