import { Controller, Delete, Get, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

export interface TaskDtos {
    readonly description: string;
    readonly isDone: boolean;
}

@Controller('euken')
export class TaskController {
    @Get()
    getMethod(@Req() req: Request): string {
        return 'This action returns all ';
    }

    @Put()
    putMethod(@Req() req: Request): string {
        return 'euken: ${req.method}';
    }

    @Post(":id/descripcion/:descripcion/cantidad/:cantidad")
    postMethod(@Param() Param: any) {
        return {Param};
    }
    
    @Delete()
    DeleteMethod(@Req() req: Request): string {
        return 'euken: ${req.method}';
    }

    @Patch()
    PatchMethod(@Req() req: Request): string {
        return 'euken: ${req.method}';
    }

}