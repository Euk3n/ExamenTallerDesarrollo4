import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

export interface TaskDtos {
  readonly description: string;
  readonly isDone: boolean;
}

@Controller('api/v1/task') // Mueve esta línea aquí
export class TaskController {
  @Post()
  methods(@Req() req: Request): string {
    return `method ${req.method}`;
  }
}
