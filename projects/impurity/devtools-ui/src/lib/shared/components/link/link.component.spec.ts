import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
import Link from '../../models/link';
import { ComponentMock } from './../../../../../mocks/component.mock';
import { LinkComponent } from './link.component';

class LinkComponentMock extends ComponentMock<LinkComponent> {
    set link(link: Link) {
        this.component.link = link;
        this.fixture.detectChanges();
    }

    get internalRouterLink(): string {
        return this.compiled.querySelector('a').href;
    }

    get internalLabel(): string {
        return this.compiled.querySelector('a').innerHTML;
    }

    get externalHref(): string {
        return this.compiled.querySelector('a').href;
    }

    get externalLabel(): string {
        return this.compiled.querySelector('a').innerHTML;
    }
}

describe('LinkComponent', () => {
    let component: LinkComponent;
    let fixture: ComponentFixture<LinkComponent>;
    let page: LinkComponentMock;
=======
import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
    let component: LinkComponent;
    let fixture: ComponentFixture<LinkComponent>;
    let compiled: any;
>>>>>>> master

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LinkComponent],
<<<<<<< HEAD
            imports: [RouterTestingModule],
=======
>>>>>>> master
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkComponent);
        component = fixture.componentInstance;
<<<<<<< HEAD
        page = new LinkComponentMock(component, fixture);
        fixture.detectChanges();
=======
        component.href = 'oranges';
        component.label = 'grapes';
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
>>>>>>> master
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

<<<<<<< HEAD
    describe('when internal', () => {
        beforeEach(() => {
            page.link = {
                href: 'apples',
                label: 'oranges',
                isInternal: true,
            } as Link;
        });

        it('should set link routerLink', () => {
            expect(page.internalRouterLink).toContain('apples');
        });

        it('should set link label', () => {
            expect(page.internalLabel).toContain('oranges');
=======
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
>>>>>>> master
        });
    });

    describe('when external', () => {
        beforeEach(() => {
<<<<<<< HEAD
            page.link = {
                href: 'apples',
                label: 'oranges',
                isInternal: false,
            } as Link;
        });

        it('should set link href', () => {
            expect(page.externalHref).toContain('apples');
        });

        it('should set link label', () => {
            expect(page.externalLabel).toContain('oranges');
=======
            component.isExternal = true;
            fixture.detectChanges();
            compiled = fixture.debugElement.nativeElement;
        });

        it('should create', () => {
            expect(component).toBeTruthy();
>>>>>>> master
        });
    });
});
