import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { PerroPComponent } from 'app/prueba/perro-p/perro-p.component';
//ruting perros 
import { AliComponent } from 'app/perros/ali/ali.component';
import { AzulComponent } from 'app/perros/azul/azul.component';
import { MonchoComponent } from 'app/perros/moncho/moncho.component';
import { MorenaComponent } from 'app/perros/morena/morena.component';
import { ObenixComponent } from 'app/perros/obenix/obenix.component';
import { OliviaComponent } from 'app/perros/olivia/olivia.component';
import { OmixComponent } from 'app/perros/omix/omix.component';
import { OrionComponent } from 'app/perros/orion/orion.component';
import { PeppersComponent } from 'app/perros/peppers/peppers.component';
import { QuijoteComponent } from 'app/perros/quijote/quijote.component';
import { QuesoComponent } from 'app/perros/queso/queso.component';
import { QuintoComponent } from 'app/perros/quinto/quinto.component';
import { RastaComponent } from 'app/perros/rasta/rasta.component';
import { RockeraComponent } from 'app/perros/rockera/rockera.component';
import { RockyComponent } from 'app/perros/rocky/rocky.component';
import { RudolphComponent } from 'app/perros/rudolph/rudolph.component';
import { SargentaComponent } from 'app/perros/sargenta/sargenta.component';
import { TeraComponent } from 'app/perros/tera/tera.component';
import { TejoComponent } from 'app/perros/tejo/tejo.component';
import { NeroComponent } from 'app/perros/nero/nero.component';
import { WairaComponent } from 'app/perros/waira/waira.component';
import { KiruComponent } from 'app/perros/kiru/kiru.component';
import { WaraComponent } from 'app/perros/wara/wara.component';
import { WilfiComponent } from 'app/perros/wilfi/wilfi.component';
import { PoltroComponent } from 'app/perros/poltro/poltro.component';
import { FenixComponent } from 'app/perros/fenix/fenix.component';
import { PriseoComponent } from 'app/perros/priseo/priseo.component';
import { MeridioComponent } from 'app/perros/meridio/meridio.component';
import { VerfasianoComponent } from 'app/perros/verfasiano/verfasiano.component';
import { AteneaComponent } from 'app/perros/atenea/atenea.component';
import { ArtemisaComponent } from 'app/perros/artemisa/artemisa.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'perro',        component: PerroPComponent },
    //ruting perros 
    {path:"ali", component: AliComponent},
    {path:"azul", component: AzulComponent},
    {path:"moncho",component:MonchoComponent},
    {path:"morena",component:MorenaComponent},
    {path:"obenix",component:ObenixComponent},
    {path:"olivia",component:OliviaComponent},
    {path:"omix",component:OmixComponent},
    {path:"orion",component:OrionComponent},
    {path:"peppers",component:PeppersComponent},
    {path:"quijote",component:QuijoteComponent},
    {path:"queso",component:QuesoComponent},
    {path:"quinto",component:QuintoComponent},
    {path:"rasta",component:RastaComponent},
    {path:"rockera",component:RockeraComponent},
    {path:"rocky",component:RockyComponent},
    {path:"rudolph",component:RudolphComponent},
    {path:"sargenta",component:SargentaComponent},
    {path:"tera",component:TeraComponent},
    {path:"tejo",component:TejoComponent},
    {path:"nero",component:NeroComponent},
    {path:"waira",component:WairaComponent},
    {path:"kiru",component:KiruComponent},
    {path:"wara",component:WaraComponent},
    {path:"wilfi",component:WilfiComponent},
    {path:"poltro",component:PoltroComponent},
    {path:"fenix",component:FenixComponent},
    {path:"priseo",component:PriseoComponent},
    {path:"meridio",component:MeridioComponent},
    {path:"verfasiano",component:VerfasianoComponent},
    {path:"atenea",component:AteneaComponent},
    {path:"artemisa",component:ArtemisaComponent},
];
