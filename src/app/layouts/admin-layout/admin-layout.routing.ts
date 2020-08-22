import { Routes } from '@angular/router';

import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { CreatePostComponent } from 'app/views/create-post/create-post.component';
import { ListPostComponent } from 'app/views/list-post/list-post.component';
export const AdminLayoutRoutes: Routes = [
        { path: 'dashboard',      component: DashboardComponent },
    { path: 'create-post',   component: CreatePostComponent },    
    { path: 'posts',   component: ListPostComponent }    
];
