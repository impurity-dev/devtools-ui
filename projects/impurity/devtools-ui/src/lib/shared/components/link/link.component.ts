import { Component, Input } from '@angular/core';

@Component({
    selector: 'devtools-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
    @Input() href: string;
    @Input() label: string;
    @Input() isExternal = false;
}
