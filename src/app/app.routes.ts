import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { SignalExample } from './components/signal-example/signal-example';
import { AttDirective } from './components/att-directive/att-directive';

export const routes: Routes = [
    {
        path:'admin',
        component:Admin
    },
    {
        path: 'control-flow-statment',
        component:ControlFlow
    },
    {
        path: 'signal',
        component:SignalExample
    },
    {
        path: 'Attribute-dir',
        component:AttDirective
    }  
];
