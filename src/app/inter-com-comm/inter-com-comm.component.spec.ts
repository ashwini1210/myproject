import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComCommComponent } from './inter-com-comm.component';

describe('InterComCommComponent', () => {
  let component: InterComCommComponent;
  let fixture: ComponentFixture<InterComCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
