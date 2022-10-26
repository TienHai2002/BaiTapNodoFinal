import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DanhMucService {
    readonly API_URL = 'http://localhost:8080/api/danhmuc';

    constructor(private http: HttpClient) {
    }

    getDanhMuc(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailDanhMuc(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addDanhMuc(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateDanhMuc(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/danhmuc/update`,
            payload
        );
    }

    deleteDanhMuc(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }

    //find
    findDanhMuc(data: any): Observable<any> {
        return this.http.post<any>(`http://localhost:8080/api/danhmuc/find`, data);

    }


}
