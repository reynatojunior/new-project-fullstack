import { IsNumber, IsString } from "class-validator"

export class CreateProdutoDto {

    @IsString()
    nome: string;

    @IsNumber()
    preco: number;
    
}
