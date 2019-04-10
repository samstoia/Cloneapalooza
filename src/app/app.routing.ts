import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LineupComponent } from './lineup/lineup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'lineup',
    component: LineupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);