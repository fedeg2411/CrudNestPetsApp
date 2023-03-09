import { CreateCatDto } from 'src/cats/dtos/create-cat.dto';
export declare class CreateUserDto {
    fullName: string;
    age: number;
    email: string;
    country: string;
    cats?: CreateCatDto[];
}
