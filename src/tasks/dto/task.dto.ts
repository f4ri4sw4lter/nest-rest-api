import { DescriptionAndOptions } from "@nestjs/common"
import { TaskStatus } from "../tasks.entity"
import { IsString } from 'class-validator' 
import { IsIn, IsNotEmpty, IsOptional, Min, MinLength } from "class-validator/types/decorator/decorators";
export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    title:string;
    description: string;
    status: TaskStatus;
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?:string;

    @IsString()
    @IsOptional()
    description?:string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.PENDING])
    status?: TaskStatus;
}