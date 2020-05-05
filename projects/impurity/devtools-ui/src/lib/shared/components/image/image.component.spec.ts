import { ComponentMock } from './../../../../../mocks/component.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';

class ImageComponentMock extends ComponentMock<ImageComponent> {
    set imageSrc(value: string) {
        this.component.image.src = value;
    }

    set imageAlt(value: string) {
        this.component.image.alt = value;
    }

    get imageSrc(): string {
        return this.compiled.querySelector('img').src;
    }

    get imageAlt(): string {
        return this.compiled.querySelector('img').alt;
    }
}

describe('ImageComponent', () => {
    let component: ImageComponent;
    let fixture: ComponentFixture<ImageComponent>;
    let page: ImageComponentMock;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageComponent);
        component = fixture.componentInstance;
        page = new ImageComponentMock(component, fixture);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set link href', () => {
        const image = new Image();
        image.src = 'oranges';
        component.image = image;
        fixture.detectChanges();
        expect(page.imageSrc).toContain('oranges');
    });

    it('should set link label', () => {
        const image = new Image();
        image.alt = 'grapes';
        component.image = image;
        fixture.detectChanges();
        expect(page.imageAlt).toContain('grapes');
    });
});
