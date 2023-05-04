import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetherComponent } from './nether.component';

describe('NetherComponent', () => {
  let component: NetherComponent;
  let fixture: ComponentFixture<NetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
