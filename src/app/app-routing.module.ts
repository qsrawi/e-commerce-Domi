import { PageHomeOneComponent } from './pages/page-home-one/page-home-one.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RootComponent } from './components/root/root.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Main page route (default route)
  { 
    path: '', 
    component: PageHomeOneComponent // This is your main landing page
  },
  // Alternative home page
  { 
    path: 'home-two', 
    data: {
        headerLayout: 'compact',
        dropcartType: 'dropdown'
    },
    component: PageHomeTwoComponent 
  },
  {
    path: 'offcanvas-cart',
    component: RootComponent,
    data: {
        headerLayout: 'compact', // change .. from classic
        dropcartType: 'offcanvas'
    }
  },
  {
    path: '',
    component: RootComponent,
    data: {
        // Header layout. Choose one of ['classic', 'compact'].
        headerLayout: 'compact', // change ... from classic
        // Dropcart type. Choose one of ['dropdown', 'offcanvas'].
        dropcartType: 'dropdown'
    },
    children: [
        {
            path: '',
            pathMatch: 'full',
            // component: PageHomeOneComponent change..
            component:PageHomeTwoComponent,
        },
        {
            path: 'shop',
            loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
        },
        {
            path: 'blog',
            loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
        },
        {
            path: 'account',
            loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
        },
        {
            path: 'site',
            loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
        },
        {
            path: '**',
            component: PageNotFoundComponent
        }
    ],
},
  // Redirects
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  // 404 page
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }