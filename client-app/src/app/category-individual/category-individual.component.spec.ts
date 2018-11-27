import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIndividualComponent } from './category-individual.component';

describe('CategoryIndividualComponent', () => {
  let component: CategoryIndividualComponent;
  let fixture: ComponentFixture<CategoryIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
