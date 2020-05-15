import { Type } from '@angular/core';

export class Page {
    protected constructor(public readonly title: string, public readonly path: string, public readonly component: Type<any>) {}
}
