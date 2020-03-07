import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
    let component: LinkComponent;
    let fixture: ComponentFixture<LinkComponent>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LinkComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkComponent);
        component = fixture.componentInstance;
        component.href = 'oranges';
        component.label = 'grapes';
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set link href', () => {
        fixture.whenStable().then(() => expect(compiled.querySelector('a').href).toContain('oranges'));
    });

    it('should set link label', () => {
        fixture.whenStable().then(() => expect(compiled.querySelector('a').innerHTML).toContain('grapes'));
    });

    describe('when internal', () => {
        beforeEach(() => {
            component.isExternal = true;
            fixture.detectChanges();
            compiled = fixture.debugElement.nativeElement;
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('when external', () => {
        beforeEach(() => {
            component.isExternal = true;
            fixture.detectChanges();
            compiled = fixture.debugElement.nativeElement;
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
