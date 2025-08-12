import { Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';

export const routes: Routes = [
    { path: 'produtos', component: ViewComponent },
    { path: '', redirectTo: '/produtos', pathMatch: 'full' }
];


