import { User } from 'src/users/entity/users.entity';
export declare class CreateCatDto {
    name: string;
    age: number;
    breed: string;
    color: string;
    userId?: User;
}
