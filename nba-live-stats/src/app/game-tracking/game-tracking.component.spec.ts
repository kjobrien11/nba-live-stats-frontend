import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTrackingComponent } from './game-tracking.component';

describe('GameTrackingComponent', () => {
  let component: GameTrackingComponent;
  let fixture: ComponentFixture<GameTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
