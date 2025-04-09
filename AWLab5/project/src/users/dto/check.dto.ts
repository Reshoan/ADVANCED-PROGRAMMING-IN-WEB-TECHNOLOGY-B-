import { IsNotEmpty } from "class-validator";

export class check{
    
    @IsNotEmpty({message:"Field Can not be empty"})
    id
}