import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminComponent = class AdminComponent {
    constructor(router, serv) {
        this.router = router;
        this.serv = serv;
        this.listaUsuarios = [];
    }
    ngOnInit() {
        this.serv.getUsuarios().subscribe((users) => {
            this.listaUsuarios = users.usuarios;
        });
    }
    volver() {
        this.router.navigate(['']);
    }
};
AdminComponent = __decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.scss']
    })
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map