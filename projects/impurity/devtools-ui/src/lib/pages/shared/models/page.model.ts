import { Type } from '@angular/core';

export class Page {
    title: string;
    path: string;
    component: Type<any>;

    protected constructor(title: string, path: string, component: Type<any>) {
        this.title = title;
        this.path = path;
        this.component = component;
    }
}
