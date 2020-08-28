import {BadRequestException, Body, Controller, Get, Post} from '@nestjs/common';
import {Category} from "../models/category.model";
import {Repository} from "typeorm/index";
import {InjectRepository} from "@nestjs/typeorm";

@Controller('categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    ) {
    }

    @Get()
    listAll() : Promise<Category[]>{
        return this.categoryRepo.find();
    }

    @Post()
    async store(@Body() body: Category) : Promise<Category>{
        const category = this.categoryRepo.create(body);
        const existing = await this.categoryRepo.findOne({where: {name: category.name}})

        if (existing){
            throw new BadRequestException('Categoria já existe');
        }

        return this.categoryRepo.save(category);
    }

}
