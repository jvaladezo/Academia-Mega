import { Routes } from '@angular/router';
import { cardComponent } from './components/card/card.component';
import { TodoComponent } from './components/todo/todo.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ProductsManagerComponent } from './components/products-manager/products-manager.component';
import { HomeComponent } from './Page/home/home.component';
import { ErrorComponent } from './Page/error/error.component';
import { info } from 'console';
import { ProductosInfoComponent } from './Page/productos-info/productos-info.component';
import { ServicePageComponent } from './Page/service-page/service-page.component';
import { FormularioComponent } from './Page/formulario/formulario.component';

export const routes: Routes = [
    {
        path:'',
        component: FormularioComponent
    },
    {
        path:'Servicio',
        component: ServicePageComponent
    },
    {
        path:'componentes',
        component: ProductosInfoComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'gestor',
        component: ProductsManagerComponent
    },
    {
        path:'card',
        component: cardComponent
    },
    {
        path:'todo',
        component: TodoComponent
    },
    {
        path:'tarjeta',
        component: TarjetaComponent
    },
    {
        path:'**',
        component: ErrorComponent
    },    
];
