import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProjectsComponent } from './selected-projects.component';

describe('SelectedProjectsComponent', () => {
  let component: SelectedProjectsComponent;
  let fixture: ComponentFixture<SelectedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
