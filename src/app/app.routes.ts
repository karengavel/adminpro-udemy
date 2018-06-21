import  {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register/register.component';
const appRoutes: Routes =[

{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '**', component: NopagefoundComponent}
//ruta cuando no existe ninguna ruta
//
// si no existe esa ruta
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});