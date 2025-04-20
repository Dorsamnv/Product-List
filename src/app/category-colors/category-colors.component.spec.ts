import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryColorsComponent } from './category-colors.component';

describe('CategoryColorsComponent', () => {
  let component: CategoryColorsComponent;
  let fixture: ComponentFixture<CategoryColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
