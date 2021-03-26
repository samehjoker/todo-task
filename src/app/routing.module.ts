import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToDoComponent } from "./modules/to-do/to-do.component";

const routes: Routes = [
    {
        path: '', component: ToDoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }