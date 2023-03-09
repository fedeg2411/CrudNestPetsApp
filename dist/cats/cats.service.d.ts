import { CreateCatDto } from './dtos/create-cat.dto';
import { Cat } from './entity/cats.entity';
import { UpdateCatDto } from './dtos/update-cat.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entity/users.entity';
export declare class CatsService {
    private readonly catRepository;
    private readonly userRepository;
    constructor(catRepository: Repository<Cat>, userRepository: Repository<User>);
    getAll(): Promise<Cat[]>;
    findOne(id: string): Promise<Cat>;
    create(createCatDto: CreateCatDto): Promise<Cat>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<Cat>;
    addOwner(catId: any, userId: any): Promise<Cat>;
    remove(id: string): Promise<string>;
}
