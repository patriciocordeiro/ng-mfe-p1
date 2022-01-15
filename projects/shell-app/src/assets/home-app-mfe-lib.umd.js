(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/flex-layout'), require('@angular/material/card'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('home-app-mfe-lib', ['exports', '@angular/common', '@angular/core', '@angular/flex-layout', '@angular/material/card', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["home-app-mfe-lib"] = {}, global.ng.common, global.ng.core, global.ng.flexLayout, global.ng.material.card, global.ng.router));
})(this, (function (exports, common, i0, i2, i1, i1$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var HomeComponent = /** @class */ (function () {
        function HomeComponent() {
        }
        HomeComponent.prototype.ngOnInit = function () {
        };
        return HomeComponent;
    }());
    HomeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    HomeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: HomeComponent, selector: "app-home", ngImport: i0__namespace, template: "<div class=\"main-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div fxFlex fxFlex.gt-sm=\"50%\" fxLayout=\"row\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>This is my Home</mat-card-title>\n        <mat-card-subtitle>My name is Dog</mat-card-subtitle>\n      </mat-card-header>\n      <img matCardImage src=\"assets/pictures/dog.jpeg\" />\n      <mat-card-content> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </mat-card-content>\n\n    </mat-card>\n  </div>\n</div>\n", styles: [":host .main-container{padding-top:36px}\n"], components: [{ type: i1__namespace.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1__namespace.MatCardHeader, selector: "mat-card-header" }], directives: [{ type: i2__namespace.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i2__namespace.DefaultLayoutAlignDirective, selector: "  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]", inputs: ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"] }, { type: i2__namespace.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i1__namespace.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1__namespace.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1__namespace.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { type: i1__namespace.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-home',
                        templateUrl: './home.component.html',
                        styleUrls: ['./home.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var routes = [{ path: '', component: HomeComponent }];
    var HomeRoutingModule = /** @class */ (function () {
        function HomeRoutingModule() {
        }
        return HomeRoutingModule;
    }());
    HomeRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HomeRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
    HomeRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeRoutingModule, imports: [[i1$1.RouterModule.forChild(routes)], i1$1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.RouterModule.forChild(routes)],
                        exports: [i1$1.RouterModule]
                    }]
            }] });

    var HomeModule = /** @class */ (function () {
        function HomeModule() {
        }
        return HomeModule;
    }());
    HomeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HomeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeModule, declarations: [HomeComponent], imports: [common.CommonModule,
            HomeRoutingModule,
            i2.FlexModule,
            i1.MatCardModule] });
    HomeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeModule, imports: [[
                common.CommonModule,
                HomeRoutingModule,
                i2.FlexModule,
                i1.MatCardModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: HomeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            HomeComponent
                        ],
                        imports: [
                            common.CommonModule,
                            HomeRoutingModule,
                            i2.FlexModule,
                            i1.MatCardModule
                        ]
                    }]
            }] });

    /*
     * Public API Surface of home-app-mfe-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HomeComponent = HomeComponent;
    exports.HomeModule = HomeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=home-app-mfe-lib.umd.js.map
