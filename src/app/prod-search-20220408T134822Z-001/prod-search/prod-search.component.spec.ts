import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSearchComponent } from './prod-search.component';

describe('ProdSearchComponent', () => {
  let component: ProdSearchComponent;
  let fixture: ComponentFixture<ProdSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
