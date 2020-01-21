import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from '../dtos/create-cat.dto';
import { UpdateCatDto } from '../dtos/update-cat.dto';
import { ICat } from '../interfaces/cat.interface';
import { CatsService } from '../services/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  public create(@Body() createCatDto: CreateCatDto): string {
      this.catsService.create(createCatDto);
      return `This action creates a new cat: ${JSON.stringify(createCatDto)}`;
  }

  @Get()
  public findAll(): ICat[] {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.catsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): string {
      return `This action returns a #${id} cat`;
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat: ${JSON.stringify(updateCatDto)}`;
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
