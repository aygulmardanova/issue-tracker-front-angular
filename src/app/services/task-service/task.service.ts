import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from 'src/app/domain/task';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  getById(id: number) {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  add(item: Task): Observable<any> {
    return this.http.post(`${this.apiUrl}`, item);
  }

  removeById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
