"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModule = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("./cats.service");
const cats_controller_1 = require("./cats.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cats_entity_1 = require("./entity/cats.entity");
const users_entity_1 = require("../users/entity/users.entity");
let CatsModule = class CatsModule {
};
CatsModule = __decorate([
    (0, common_1.Module)({
        providers: [cats_service_1.CatsService],
        controllers: [cats_controller_1.CatsController],
        exports: [cats_service_1.CatsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([cats_entity_1.Cat, users_entity_1.User])]
    })
], CatsModule);
exports.CatsModule = CatsModule;
//# sourceMappingURL=cats.module.js.map