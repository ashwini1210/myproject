import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopoutComponent } from './shopout.component';

describe('ShopoutComponent', () => {
  let component: ShopoutComponent;
  let fixture: ComponentFixture<ShopoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
