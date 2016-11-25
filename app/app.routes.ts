import { HomePageComponent } from './components/home-page/home-page.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';

export const ContactsAppRoutes = [
    { path: '', component: HomePageComponent },
    { path: 'details/:id', component: ServiceDetailsComponent },
    { path: 'add', component: ServiceFormComponent },
    { path: '**', redirectTo: '' }
];