import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsViewsComponent } from './teams-views.component';

describe('TeamsViewsComponent', () => {
  let component: TeamsViewsComponent;
  let fixture: ComponentFixture<TeamsViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
