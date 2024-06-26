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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const create_report_dto_1 = require("./dtos/create-report.dto");
const reports_service_1 = require("./reports.service");
const auth_guard_1 = require("../guards/auth.guard");
const current_user_decorator_1 = require("../users/decorators/current-user.decorator");
const user_entity_1 = require("../users/user.entity");
const report_dto_1 = require("./dtos/report.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    createReport(body, user) {
        return this.reportsService.create(body, user);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    serialize_interceptor_1.Serialize(report_dto_1.ReportDto),
    __param(0, common_1.Body()),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_report_dto_1.CreateReportDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "createReport", null);
ReportsController = __decorate([
    common_1.Controller('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map