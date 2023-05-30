import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { CarruselComponent } from './components/objects/carrusel/carrusel.component';

const routes: Routes = [
  {path:'',redirectTo:'start',pathMatch:'full'},
  {path:'app-header', component:HeaderComponent},
  {path:'app-footer', component:FooterComponent},
  {path:'start', component: StartPageComponent},
  {path:'app-carrusel',component:CarruselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
