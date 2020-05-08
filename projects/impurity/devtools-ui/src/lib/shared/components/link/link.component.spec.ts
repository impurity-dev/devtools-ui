import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import Link from '../../models/link.model';
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

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LinkComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkComponent);
        component = fixture.componentInstance;
        page = new LinkComponentMock(component, fixture);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

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
        });
    });

    describe('when external', () => {
        beforeEach(() => {
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
        });
    });
});
