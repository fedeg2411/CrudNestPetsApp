import { Cat } from "src/cats/entity/cats.entity";
export declare class UpdateUserDto {
    fullName: string;
    age: number;
    email: string;
    country: string;
    cats?: Cat[];
}
