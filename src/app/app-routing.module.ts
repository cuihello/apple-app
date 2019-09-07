import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'mymes', loadChildren: './mymes/mymes.module#MymesPageModule' },
  { path: 'sysmes', loadChildren: './sysmes/sysmes.module#SysmesPageModule' },
  { path: 'bus', loadChildren: './bus/bus.module#BusPageModule' },
  { path: 'park', loadChildren: './park/park.module#ParkPageModule' },
  { path: 'car', loadChildren: './car/car.module#CarPageModule' },
  { path: 'seting', loadChildren: './seting/seting.module#SetingPageModule' },
  { path: 'moremes', loadChildren: './moremes/moremes.module#MoremesPageModule' },
  { path: 'parkmore', loadChildren: './parkmore/parkmore.module#ParkmorePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
