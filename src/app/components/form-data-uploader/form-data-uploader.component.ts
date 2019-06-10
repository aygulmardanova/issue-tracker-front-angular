import {Component, OnInit} from '@angular/core';
import {FileService} from '../../services/file-service/file.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-form-data-uploader',
  templateUrl: './form-data-uploader.component.html',
  styleUrls: ['./form-data-uploader.component.css']
})
export class FormDataUploaderComponent implements OnInit {
  loading = false;
  preview: string = null;

  constructor(private service: FileService) {
  }

  ngOnInit() {
  }

  onUpload($event: Event) {
    console.log($event.target);
    console.log($event.currentTarget);
    this.loading = true;
    this.preview = null;

    // @ts-ignore
    const file = $event.target.files[0];

    this.service.uploadFormData(file).subscribe(
      ({name}) => {
        this.preview = `${environment.imageUrl}/${name}`;
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }
}
