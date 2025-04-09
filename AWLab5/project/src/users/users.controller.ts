import { Controller, Get, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { check } from './dto/check.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly abdService: UsersService) {}
    @Get()
    @UsePipes(ValidationPipe)
    getAbd(@Body() ab: check) {
        return ab
    }    
}
