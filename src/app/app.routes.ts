import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PostComponent } from './pages/post/post.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
   { path: 'post/:title', component: PostComponent},
   { path: 'inicio', component: InicioComponent},
   { path: 'nosotros', component: NosotrosComponent},
   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
   { path: '**', component:InicioComponent}

];
// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRouting {}
