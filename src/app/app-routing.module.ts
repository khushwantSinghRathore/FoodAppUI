import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full',
  },
  {
    path: 'splashscreen',
    loadChildren: () =>
      import('./screens/splashscreen/splashscreen.module').then(
        (m) => m.SplashscreenPageModule
      ),
  },
  {
    path: 'slider',
    loadChildren: () =>
      import('./screens/slider/slider.module').then((m) => m.SliderPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./screens/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'sigin',
    loadChildren: () =>
      import('./screens/sigin/sigin.module').then((m) => m.SiginPageModule),
  },
  {
    path: 'sigup',
    loadChildren: () =>
      import('./screens/sigup/sigup.module').then((m) => m.SigupPageModule),
  },
  {
    path: 'forgetpass',
    loadChildren: () =>
      import('./screens/forgetpass/forgetpass.module').then(
        (m) => m.ForgetpassPageModule
      ),
  },
  {
    path: 'resetpass',
    loadChildren: () =>
      import('./screens/resetpass/resetpass.module').then(
        (m) => m.ResetpassPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./screens/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./screens/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./screens/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./screens/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./screens/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'hotspots',
    loadChildren: () => import('./hotspots/hotspots.module').then( m => m.HotspotsPageModule)
  },
  {
    path: 'featured',
    loadChildren: () => import('./featured/featured.module').then( m => m.FeaturedPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
