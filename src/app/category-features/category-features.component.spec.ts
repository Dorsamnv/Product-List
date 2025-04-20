import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFeaturesComponent } from './category-features.component';

describe('CategoryFeaturesComponent', () => {
  let component: CategoryFeaturesComponent;
  let fixture: ComponentFixture<CategoryFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
