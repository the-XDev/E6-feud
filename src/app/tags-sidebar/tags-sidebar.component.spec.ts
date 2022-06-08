import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsSidebarComponent } from './tags-sidebar.component';

describe('TagsSidebarComponent', () => {
  let component: TagsSidebarComponent;
  let fixture: ComponentFixture<TagsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
