import { Injectable } from '@nestjs/common';
import { ICat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [];

  public create(cat: ICat) {
    this.cats.push(cat);
  }

  public findAll(): ICat[] {
    return this.cats;
  }
}
