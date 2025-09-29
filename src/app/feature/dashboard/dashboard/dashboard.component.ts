import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonBadge, IonProgressBar, IonIcon } from '@ionic/angular/standalone';
import { DecimalPipe, DatePipe } from '@angular/common';
import { FinancialGoal } from '../../../shared/models/financial-goal.model';
import { addIcons } from 'ionicons';
import { ellipse } from 'ionicons/icons';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { MockApiStoreService } from 'src/app/core/services/mock-api/mock-api-store.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [IonIcon, IonCol, IonRow, IonGrid, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonBadge, IonProgressBar, DecimalPipe, DatePipe, HeaderComponent],
})
export class DashboardComponent implements OnInit {
  private mockApiStoreService = inject(MockApiStoreService);

  loading = signal<boolean>(false);

  protected financialGoals = this.mockApiStoreService.financialGoals;

  constructor() {
    addIcons({
      ellipse
    })
  }

  ngOnInit() {
    this.mockApiStoreService.initializeMockData();
  }

  // Function For Calculating Progress Bar
  getProgressPercentage(goal: FinancialGoal): number {
    return (goal.progress / goal.targetAmount) * 100;
  }

  // Function To Get Color Of Priority
  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'medium';
    }
  }
}
