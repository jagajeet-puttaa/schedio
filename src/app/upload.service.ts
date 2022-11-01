import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  DJANGO_SERVER: string = "http://192.168.162.120:8000";
  constructor(private http: HttpClient) { }

  public upload(formData: any) {
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  }
}

import { HttpClient } from '@angular/common/http';