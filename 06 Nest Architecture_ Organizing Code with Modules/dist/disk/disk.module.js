"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskModule = void 0;
const common_1 = require("@nestjs/common");
const disk_service_1 = require("./disk.service");
const power_module_1 = require("../power/power.module");
let DiskModule = class DiskModule {
};
DiskModule = __decorate([
    common_1.Module({
        imports: [power_module_1.PowerModule],
        providers: [disk_service_1.DiskService],
        exports: [disk_service_1.DiskService],
    })
], DiskModule);
exports.DiskModule = DiskModule;
//# sourceMappingURL=disk.module.js.map