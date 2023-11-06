import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueFacoComponent } from './oque-faco.component';

describe('OQueFacoComponent', () => {
  let component: OQueFacoComponent;
  let fixture: ComponentFixture<OQueFacoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OQueFacoComponent]
    });
    fixture = TestBed.createComponent(OQueFacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
