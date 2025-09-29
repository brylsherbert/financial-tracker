export interface FinancialGoal {
  id: number;
  goal: string;
  targetAmount: number;
  progress: number;
  targetDate: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface MockApiResponse {
  financialGoals: FinancialGoal[];
}
