import { Page } from './pages/shared/models/page.model';
import { LinkPageComponent } from './pages/link-page/link-page.component';
import { LinkPage } from './pages/link-page/models/link-page.model';
import { Component, Input } from '@angular/core';
import Image from './shared/models/image.model';
import { Router, Routes, Route } from '@angular/router';

@Component({
    selector: 'devtools-ui',
    templateUrl: './devtools-ui.component.html',
    styleUrls: ['./devtools-ui.component.scss'],
})
export class DevtoolsUiComponent {
    @Input() title: string;
    @Input() icon: Image;
    @Input() pages: Page[];
}
