import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
export class CopyToClipboardService {

    private document: Document;

    constructor( @Inject( DOCUMENT ) document: Document ) {
        this.document = document;
    }

    // ---
    // PUBLIC METHODS.
    // ---

    // I copy the given value to the user's system clipboard. Returns a promise that
    // resolves to the given value on success or rejects with the raised Error.
    public copy( value: string ) {

        const promise = new Promise(( resolve, reject ): void => {

            let textarea = null;

            try {

                // In order to execute the "Copy" command, we actually have to have
                // a "selection" in the currently rendered document. As such, we're
                // going to inject a Textarea element and .select() it in order to
                // force a selection.
                // --
                // NOTE: This Textarea is being rendered off-screen.
                textarea = this.document.createElement('textarea');
                textarea.style.height = '0px';
                textarea.style.left = '-100px';
                textarea.style.opacity = '0';
                textarea.style.position = 'fixed';
                textarea.style.top = '-100px';
                textarea.style.width = '0px';
                this.document.body.appendChild(textarea);

                // Set and select the value (creating an active Selection range).
                textarea.value = value;
                textarea.select();

                // Ask the browser to copy the current selection to the clipboard.
                this.document.execCommand('copy');

                resolve(value);

            } finally {

                // Cleanup - remove the Textarea from the DOM if it was injected.
                if ( textarea && textarea.parentNode ) {
                    textarea.parentNode.removeChild( textarea );
                }

            }

        });

        return(promise);

    }

}
