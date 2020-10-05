import { EntityRepository, Repository } from '@twenix/typeorm';
import { Photo } from '../photo.entity';
import { PhotoSchema } from './photo.schema';

@EntityRepository(PhotoSchema)
export class CustomPhotoSchemaRepository extends Repository<Photo> {}
