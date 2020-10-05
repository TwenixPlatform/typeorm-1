import { EntityRepository, Repository } from '@twenix/typeorm';
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class CustomPhotoRepository extends Repository<Photo> {}
