import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', component: InicioComponent},

];
// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class FeatureRoutingModule {}
