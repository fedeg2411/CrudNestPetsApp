import { CreateCatDto } from '../../cats/dtos/create-cat.dto';
export declare class User {
    id: string;
    fullName: string;
    age: number;
    email: string;
    country: string;
    cats: CreateCatDto[];
}
