import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private httpClient = inject(HttpClient);

  constructor() {}

  // Login User
  loginUser(body: User): Observable<UserResponse> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKey,
    });

    return this.httpClient.post<UserResponse>(`${environment.baseUrl}/login`, body, {
      headers,
    });
  }

  // Register User
  registerUser(body: User): Observable<UserResponse> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKey,
    });

    return this.httpClient.post<UserResponse>(`${environment.baseUrl}/register`, body, {
      headers,
    });
  }

  // Logout User
  logoutUser(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKey,
    });

    return this.httpClient.post(`${environment.baseUrl}/logout`, {},{ headers });
  }
}
