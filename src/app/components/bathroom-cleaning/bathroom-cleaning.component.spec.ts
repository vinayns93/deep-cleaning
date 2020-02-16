import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomCleaningComponent } from './bathroom-cleaning.component';

describe('BathroomCleaningComponent', () => {
  let component: BathroomCleaningComponent;
  let fixture: ComponentFixture<BathroomCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
