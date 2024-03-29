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
var myConter = (function () {
    function myConter() {
        this.myNumberChange = new core_1.EventEmitter();
    }
    // increament(){
    // this.Counter++;
    // this.sendCount.emit(this.Counter);
    // }
    myConter.prototype.increament = function () {
        this.myNumber++;
        this.myNumberChange.emit(this.myNumber);
    };
    return myConter;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], myConter.prototype, "myNumber", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], myConter.prototype, "myNumberChange", void 0);
myConter = __decorate([
    core_1.Component({
        selector: "conter",
        templateUrl: "/app/Template/conter.html",
        styleUrls: ["app/Content/conter.css"]
    })
], myConter);
exports.myConter = myConter;
//# sourceMappingURL=Conter.js.map