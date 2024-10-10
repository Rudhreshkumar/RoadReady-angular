import { Routes } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { DescriptionComponent } from './component/description/description.component';

export const routes: Routes = [
    {
        "path":"", component: BookDashboardComponent,
    },
    {
        "path":"book",component:BookComponent
    },
    {
        "path":"addBook",component:AddBookComponent
    },
    {
        "path":"editBook/:id",component:EditBookComponent
    },
    {
        "path":"description/:id",component:DescriptionComponent
    }
];
