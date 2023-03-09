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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const cats_entity_1 = require("./entity/cats.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../users/entity/users.entity");
let CatsService = class CatsService {
    constructor(catRepository, userRepository) {
        this.catRepository = catRepository;
        this.userRepository = userRepository;
    }
    async getAll() {
        try {
            return await this.catRepository.find();
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
    async findOne(id) {
        const Cat = await this.catRepository.findOneBy({ id });
        if (!Cat)
            throw new common_1.NotFoundException(`Cat with id = ${id} not found`);
        return Cat;
    }
    async create(createCatDto) {
        const { userId = null } = createCatDto, tocreate = __rest(createCatDto, ["userId"]);
        try {
            if (!userId) {
                const cat = this.catRepository.create(createCatDto);
                return await this.catRepository.save(cat);
            }
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Unexpected error');
        }
        const user = await this.userRepository.findOneBy({ id: userId.id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const cat = this.catRepository.create(createCatDto);
        return await this.catRepository.save(cat);
    }
    async update(id, updateCatDto) {
        const newCat = await this.catRepository.preload(Object.assign({ id }, updateCatDto));
        if (!newCat)
            throw new common_1.NotFoundException(`Cat with id = ${id} not found`);
        try {
            return await this.catRepository.save(newCat);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Unexpected error');
        }
    }
    async addOwner(catId, userId) {
        let newCat = await this.catRepository.preload({ id: catId, userId: userId });
        if (!newCat)
            throw new common_1.NotFoundException(`Cat with id = ${catId} not found`);
        try {
            return await this.catRepository.save(newCat);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Unexpected error');
        }
    }
    async remove(id) {
        const product = await this.findOne(id);
        await this.catRepository.remove(product);
        return 'Se elimino el registro con exito.';
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cats_entity_1.Cat)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map