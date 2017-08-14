"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HiiComponent = (function () {
    function HiiComponent() {
        this.imgEv = new core_1.EventEmitter();
    }
    HiiComponent.prototype.ngOnInit = function () {
    };
    HiiComponent.prototype.imageEvent = function (imgNm) {
        this.imgEv.emit(imgNm);
        console.log(imgNm);
    };
    __decorate([
        core_1.Output()
    ], HiiComponent.prototype, "imgEv");
    HiiComponent = __decorate([
        core_1.Component({
            selector: 'app-hii',
            template: "\n  \n    <div class=\"row\">\n    <div class=\"col-md-12\">\n    <input type=\"button\" class=\"btn btn-primary\"  value=\"happy\" (onclick)=\"imageEvent('happy.png')\"/>\n    <input type=\"button\" class=\"btn btn-primary\" value=\"sad\"  (onclick)=\"imageEvent('sad.jpg')\"/>\n    <input type=\"button\" class=\"btn btn-primary\" value=\"simley\"  (onclick)=\"imageEvent('simley.jpg')\"/>\n\n    </div>\n    </div>\n\n  ",
            styles: []
        })
    ], HiiComponent);
    return HiiComponent;
}());
exports.HiiComponent = HiiComponent;
