import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UploadFile} from '../../domain/upload-file';
import {environment} from '../../../environments/environment';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private uploadUrl = environment.uploadUrl;

  constructor(private http: HttpClient) {
  }

  uploadFormData(file: File): Observable<UploadFile> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<UploadFile>(`${this.uploadUrl}/multipart`, formData);
  }

  uploadArrayBuffer(file: File): Observable<UploadFile> {
    return Observable.create(observer => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        observer.next(reader.result);
        observer.complete();
      });
      reader.addEventListener('error', () => {
        observer.error(reader.error);
      });

      reader.readAsArrayBuffer(file);
    }).pipe(
      mergeMap((buffer: ArrayBuffer) =>
        this.http.post<UploadFile>(`${this.uploadUrl}/bytes`, buffer)
      )
    );

/*
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        resolve(reader.result);
      });
      reader.addEventListener('error', () => {
        reject(reader.error);
      });

      reader.readAsArrayBuffer(file);
    });
*/
  }
}
