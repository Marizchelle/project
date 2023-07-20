import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'shopmenu',
    loadChildren: () => import('./shopmenu/shopmenu.module').then( m => m.ShopmenuPageModule)
  },
  {
    path: 'sneaker',
    loadChildren: () => import('./sneaker/sneaker.module').then( m => m.SneakerPageModule)
  },
  {
    path: 'perfume',
    loadChildren: () => import('./perfume/perfume.module').then( m => m.PerfumePageModule)
  },
  {
    path: 'fashion',
    loadChildren: () => import('./fashion/fashion.module').then( m => m.FashionPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'gadget',
    loadChildren: () => import('./gadget/gadget.module').then( m => m.GadgetPageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'marizchat',
    loadChildren: () => import('./marizchat/marizchat.module').then( m => m.MarizchatPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'ship',
    loadChildren: () => import('./ship/ship.module').then( m => m.ShipPageModule)
  },
  {
    path: 'receive',
    loadChildren: () => import('./receive/receive.module').then( m => m.ReceivePageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
