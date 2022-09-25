import { TypeOrmModule } from '@nestjs/typeorm';

export const OrmModule = TypeOrmModule.forRoot({
  type: process.env.DATABASE_TYPE as any,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_POST),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [],
  synchronize: process.env.DATABASE_SYNCHRONIZE == 'true',
});
