import { BaseEntity } from '../entities/base-entity';

export type SearchResultProps<Entity extends BaseEntity> = {
  items: Entity[];
  total: number;
  currentPage: number;
  perPage: number;
  sort: string | null;
  sortDir: string | null;
  filter: string | null;
  field: string | null;
  comparisonOperator: string | null;
  dateField: string | null;
  status: string | null;
  from: string | null;
  to: string | null;
};

export class SearchResult<Entity extends BaseEntity> {
  readonly items: Entity[];
  readonly total: number;
  readonly currentPage: number;
  readonly perPage: number;
  readonly lastPage: number;
  readonly sort: string | null;
  readonly sortDir: string | null;
  readonly filter: string | null;
  readonly field: string | null;
  readonly comparisonOperator: string | null;
  readonly dateField: string | null;
  readonly status: string | null;
  readonly from: string | null;
  readonly to: string | null;

  constructor(props: SearchResultProps<Entity>) {
    this.items = props.items;
    this.total = props.total;
    this.currentPage = props.currentPage;
    this.perPage = props.perPage;
    this.lastPage = Math.floor(this.total / this.perPage);
    this.sort = props.sort ?? null;
    this.sortDir = props.sortDir ?? null;
    this.filter = props.filter ?? null;
    this.field = props.field ?? null;
    this.comparisonOperator = props.comparisonOperator ?? null;
    this.dateField = props.dateField ?? null;
    this.status = props.status ?? null;
    this.from = props.from ?? null;
    this.to = props.to ?? null;
  }

  toJson(forceEntity: boolean = false) {
    return {
      items: forceEntity ? this.items.map((item) => item.toJson()) : this.items,
      total: this.total,
      currentPage: this.currentPage,
      perPage: this.perPage,
      lastPage: this.lastPage,
      sort: this.sort,
      sortDir: this.sortDir,
      filter: this.filter,
      field: this.field,
      comparisonOperator: this.comparisonOperator,
      dateField: this.dateField,
      status: this.status,
      from: this.from,
      to: this.to,
    };
  }
}
