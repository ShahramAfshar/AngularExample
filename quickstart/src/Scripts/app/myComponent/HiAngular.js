"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HiAngular = (function () {
    function HiAngular() {
        this.myStyle = 'blue';
        this.customeClass = 'class2';
        this.isActive = false;
        this.count = 0;
        this.people = [
            { name: 'shahram', fname: 'afshar', age: '30' },
            { name: 'ali', fname: 'moghadam', age: '29' },
            { name: 'reza', fname: 'alinial', age: '34' },
        ];
    }
    HiAngular.prototype.active = function () {
        this.isActive = !this.isActive;
    };
    return HiAngular;
}());
HiAngular = __decorate([
    core_1.Component({
        selector: "HiAngular",
        templateUrl: "/app/Template/HiAngular.html",
        styleUrls: ["app/Content/HiAngular.css"]
    }),
    __metadata("design:paramtypes", [])
], HiAngular);
exports.HiAngular = HiAngular;
//# sourceMappingURL=HiAngular.js.map