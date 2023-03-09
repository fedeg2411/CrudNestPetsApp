import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    getAll(): Promise<import("./entity/cats.entity").Cat[]>;
    findOne(id: string): Promise<import("./entity/cats.entity").Cat>;
    createCat(createCatDto: CreateCatDto): Promise<import("./entity/cats.entity").Cat>;
    updateCat(id: any, updateCatDto: UpdateCatDto): Promise<import("./entity/cats.entity").Cat>;
    deleteCat(id: any): void;
    addOwner(body: any): Promise<import("./entity/cats.entity").Cat>;
}
