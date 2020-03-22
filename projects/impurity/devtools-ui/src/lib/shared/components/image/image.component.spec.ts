import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
    let component: ImageComponent;
    let fixture: ComponentFixture<ImageComponent>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.src = 'oranges';
        component.alt = 'grapes';
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set link href', () => {
        fixture.whenStable().then(() => expect(compiled.querySelector('img').src).toContain('oranges'));
    });

    it('should set link label', () => {
        fixture.whenStable().then(() => expect(compiled.querySelector('img').alt).toContain('grapes'));
    });
});
