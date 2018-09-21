import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public currentSectionKey = '';
    constructor() { }

    ngOnInit() {}

    setSectionKey(key: string) {

        if (key === this.currentSectionKey) {
            this.setSectionKey('');
            return;
        }
        this.currentSectionKey = key;
    }

    getSectionKey(): string {
        return this.currentSectionKey;
    }

}
