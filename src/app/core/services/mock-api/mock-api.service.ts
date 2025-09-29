import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FinancialGoal, MockApiResponse } from '../../../shared/models/financial-goal.model';

@Injectable({
    providedIn: 'root'
})
export class MockApiService {
    private readonly apiUrl = 'assets/mock-api/mock-api.json';

    constructor(private http: HttpClient) { }

    // Returns all financial goals from the mock API.
    getFinancialGoals(): Observable<FinancialGoal[]> {
        return this.http.get<MockApiResponse>(this.apiUrl).pipe(
            map(response => response.financialGoals)
        );
    }

    //  Returns specific financial goal by id.
    getFinancialGoalById(id: number): Observable<FinancialGoal | undefined> {
        return this.getFinancialGoals().pipe(
            map(goals => goals.find(goal => goal.id === id))
        );
    }

    // Returns financial goals filtered by priority.
    getFinancialGoalsByPriority(priority: 'High' | 'Medium' | 'Low'): Observable<FinancialGoal[]> {
        return this.getFinancialGoals().pipe(
            map(goals => goals.filter(goal => goal.priority === priority))
        );
    }
}
