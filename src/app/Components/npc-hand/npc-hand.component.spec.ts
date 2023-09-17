import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcHandComponent } from './npc-hand.component';

describe('NpcHandComponent', () => {
  let component: NpcHandComponent;
  let fixture: ComponentFixture<NpcHandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpcHandComponent]
    });
    fixture = TestBed.createComponent(NpcHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
