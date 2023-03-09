import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAll(): Promise<import("./entity/users.entity").User[]>;
    findOne(id: string): Promise<import("./entity/users.entity").User>;
    createUser(createUserDto: CreateUserDto): Promise<import("./entity/users.entity").User>;
    createUserCat(createUserDto: CreateUserDto): Promise<import("./entity/users.entity").User>;
}
