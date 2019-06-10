import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBufferUploaderComponent } from './array-buffer-uploader.component';

describe('ArrayBufferUploaderComponent', () => {
  let component: ArrayBufferUploaderComponent;
  let fixture: ComponentFixture<ArrayBufferUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayBufferUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayBufferUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
