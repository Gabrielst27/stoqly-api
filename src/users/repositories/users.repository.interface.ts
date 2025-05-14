import { SearchParams as DefaultSearchParams } from '../../shared/repositories/search.params';
import { SearchResult as DefaultSearchResult } from '../../shared/repositories/search.result';
import { ISearchableRepository } from '../../shared/repositories/searchable.repository.interface';
import { UserEntity } from '../entities/users.entity';

export namespace IUserRepository {
  export class SearchParams extends DefaultSearchParams {}
  export class SearchResult extends DefaultSearchResult<UserEntity> {}
  export interface Repository
    extends ISearchableRepository<UserEntity, SearchParams, SearchResult> {
    emailExists(email: string): Promise<void>;
  }
}
