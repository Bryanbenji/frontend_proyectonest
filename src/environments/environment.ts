// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    productoURL: 'http://localhost:8080/producto/',
    topproductoURL: 'http://localhost:8080/topproducto/',
    reporteventaproductoURL: 'http://localhost:8080/reporteventaproducto/',
    categoriaURL:'http://localhost:8080/categoria/',
    proveedorURL:'http://localhost:8080/proveedor/',
    contratoURL:'http://localhost:8080/contrato/',
    detallecontratoURL:'http://localhost:8080/detallecontrato/',
    authURL: 'http://localhost:8080/auth/'
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.