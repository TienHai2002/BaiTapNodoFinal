import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaidanhmucService {
    readonly API_URL = 'http://localhost:8080/api/loaidanhmuc';
    constructor(private http: HttpClient) {}

    getLoaiDanhMuc(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailLoaiDanhMuc(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addLoaiDanhMuc(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateLoaiDanhMuc(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/danhmuc/update`,
            payload
        );
    }

    deleteLoaiDanhMuc(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
    //find
    findDanhMuc(data: any): Observable<any> {
        return this.http.post<any>(`http://localhost:8080/api/danhmuc/find`, data);

    }
    //find
    findLoaiDanhMuc(data: any): Observable<any> {
        return this.http.post<any>(`http://localhost:8080/api/loaidanhmuc/find`, data);

    }
}
