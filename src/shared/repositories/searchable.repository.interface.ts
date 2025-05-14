import { BaseEntity } from '../entities/base-entity';
import { IRepository } from './repository.interface';
import { SearchParams } from './search.params';
import { SearchResult } from './search.result';

export interface ISearchableRepository<
  Entity extends BaseEntity,
  SearchInput = SearchParams,
  SearchOutput = SearchResult<Entity>,
> extends IRepository<Entity> {
  sortableFields: string[];
  searchableFields: string[];
  dateFields: string[];

  search(params: SearchInput): Promise<SearchOutput>;
}
