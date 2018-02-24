import { RouterModule, Routes } from '@angular/router';
import {
  TimecardComponent
} from './pages';

export const appRoutes: Routes = [
  { path: '**', component: TimecardComponent },
];
