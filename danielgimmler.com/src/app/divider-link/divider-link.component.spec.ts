import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerLinkComponent } from './divider-link.component';

describe('DividerLinkComponent', () => {
  let component: DividerLinkComponent;
  let fixture: ComponentFixture<DividerLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
