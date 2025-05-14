import { BaseEntity } from '../entities/base-entity';

export interface IRepository<E extends BaseEntity> {
  find(id: string): Promise<E>;
  findAll(): Promise<E[]>;
  insert(entity: E): Promise<void>;
  update(entity: E): Promise<void>;
  delete(id: string): Promise<void>;
}
