import { ComponentFixture } from '@angular/core/testing';

export class ComponentMock<T> {
    get compiled(): any {
        return this.fixture.debugElement.nativeElement;
    }

    constructor(public component: T, public fixture: ComponentFixture<T>) {}
}
