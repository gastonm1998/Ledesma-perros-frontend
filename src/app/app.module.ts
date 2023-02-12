import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AliComponent } from './perros/ali/ali.component';
import { AzulComponent } from './perros/azul/azul.component';
import { MonchoComponent } from './perros/moncho/moncho.component';
import { MorenaComponent } from './perros/morena/morena.component';
import { ObenixComponent } from './perros/obenix/obenix.component';
import { OliviaComponent } from './perros/olivia/olivia.component';
import { OmixComponent } from './perros/omix/omix.component';
import { OrionComponent } from './perros/orion/orion.component';
import { PeppersComponent } from './perros/peppers/peppers.component';
import { QuijoteComponent } from './perros/quijote/quijote.component';
import { QuesoComponent } from './perros/queso/queso.component';
import { QuintoComponent } from './perros/quinto/quinto.component';
import { RastaComponent } from './perros/rasta/rasta.component';
import { RockeraComponent } from './perros/rockera/rockera.component';
import { RockyComponent } from './perros/rocky/rocky.component';
import { RudolphComponent } from './perros/rudolph/rudolph.component';
import { SargentaComponent } from './perros/sargenta/sargenta.component';
import { TeraComponent } from './perros/tera/tera.component';
import { TejoComponent } from './perros/tejo/tejo.component';
import { NeroComponent } from './perros/nero/nero.component';
import { WairaComponent } from './perros/waira/waira.component';
import { KiruComponent } from './perros/kiru/kiru.component';
import { WaraComponent } from './perros/wara/wara.component';
import { WilfiComponent } from './perros/wilfi/wilfi.component';
import { PoltroComponent } from './perros/poltro/poltro.component';
import { FenixComponent } from './perros/fenix/fenix.component';
import { PriseoComponent } from './perros/priseo/priseo.component';
import { MeridioComponent } from './perros/meridio/meridio.component';
import { VerfasianoComponent } from './perros/verfasiano/verfasiano.component';
import { AteneaComponent } from './perros/atenea/atenea.component';
import { ArtemisaComponent } from './perros/artemisa/artemisa.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AliComponent,
    AzulComponent,
    MonchoComponent,
    MorenaComponent,
    ObenixComponent,
    OliviaComponent,
    OmixComponent,
    OrionComponent,
    PeppersComponent,
    QuijoteComponent,
    QuesoComponent,
    QuintoComponent,
    RastaComponent,
    RockeraComponent,
    RockyComponent,
    RudolphComponent,
    SargentaComponent,
    TeraComponent,
    TejoComponent,
    NeroComponent,
    WairaComponent,
    KiruComponent,
    WaraComponent,
    WilfiComponent,
    PoltroComponent,
    FenixComponent,
    PriseoComponent,
    MeridioComponent,
    VerfasianoComponent,
    AteneaComponent,
    ArtemisaComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
