import { Component, OnInit } from '@angular/core';
import {FileService} from '../../services/file-service/file.service';

@Component({
  selector: 'app-array-buffer-uploader',
  templateUrl: './array-buffer-uploader.component.html',
  styleUrls: ['./array-buffer-uploader.component.css']
})
export class ArrayBufferUploaderComponent implements OnInit {

  constructor(private service: FileService) { }

  ngOnInit() {
  }

  onUpload($event: Event) {
    // @ts-ignore
    const file = $event.target.files[0];
    this.service.uploadArrayBuffer(file).subscribe(
      data => {
        console.log(data);
      },
      error => {}
    );
  }
}
