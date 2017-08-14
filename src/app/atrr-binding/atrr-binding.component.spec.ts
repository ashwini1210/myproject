import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrrBindingComponent } from './atrr-binding.component';

describe('AtrrBindingComponent', () => {
  let component: AtrrBindingComponent;
  let fixture: ComponentFixture<AtrrBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrrBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrrBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
