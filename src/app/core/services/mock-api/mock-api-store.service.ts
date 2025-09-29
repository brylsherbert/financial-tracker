import { inject, Injectable, signal } from '@angular/core';
import { MockApiService } from './mock-api.service';
import { FinancialGoal } from 'src/app/shared/models/financial-goal.model';

@Injectable({ providedIn: 'root'})
export class MockApiStoreService {
    private mockApiService = inject(MockApiService);

    private readonly financialGoalsSignal = signal<FinancialGoal[]>([]);

    public financialGoals = this.financialGoalsSignal.asReadonly();

constructor() { }

    // Fetch Financial Goals Data
    initializeMockData() {
        this.mockApiService.getFinancialGoals().subscribe({
            next: (goals: FinancialGoal[]) => {
                this.financialGoalsSignal.set(goals);
            },
            error: (error) => {
                console.error('Error loading mock financial goals:', error);
            }
        });
    }   
}
