import { EOperators } from '../enums/operators.enum';

export type SortDirection = 'asc' | 'desc';

export type SearchProps = {
  page: number | null;
  perPage: number | null;
  sort: string | null;
  sortDirection: SortDirection | null;
  filter: string | null;
  field: string | null;
  comparisonOperator: EOperators | null;
  dateField: string | null;
  status: string | null;
  from: string | null;
  to: string | null;
};

export class SearchParams {
  protected _page: number = 0;
  protected _perPage: number = 15;
  protected _sort: string | null;
  protected _sortDirection: string | null;
  protected _filter: string | null;
  protected _field: string | null;
  protected _comparisonOperator: string | null;
  protected _dateField: string | null;
  protected _status: string | null;
  protected _from: string | null;
  protected _to: string | null;

  constructor(params: SearchProps) {
    this._page = params.page ?? this._page;
    this._perPage = params.perPage ?? this._perPage;
    this._sort = params.sort;
    this._sortDirection = params.sortDirection;
    this._filter = params.filter;
    this._field = params.field;
    this._comparisonOperator = params.comparisonOperator;
    this._dateField = params.dateField;
    this._status = params.status ?? null;
    this._from = params.from ?? null;
    this._to = params.to ?? null;
  }

  get page() {
    return this._page;
  }

  private set page(value: number) {
    let _page = +value;

    if (Number.isNaN(_page) || _page <= 0 || parseInt(_page as any) !== _page) {
      _page = 1;
    }

    this._page = _page;
  }

  get perPage() {
    return this._perPage;
  }

  private set perPage(value: number) {
    let _perPage = +value;
    if (
      Number.isNaN(_perPage) ||
      _perPage <= 0 ||
      parseInt(_perPage as any) !== _perPage
    ) {
      _perPage = this._perPage;
    }

    this._perPage = _perPage;
  }

  get sort() {
    return this._sort;
  }

  private set sort(value: string | null) {
    let _sort =
      value === null || value === undefined || value === '' ? null : `${value}`;
    this._sort = _sort;
  }

  get sortDirection() {
    return this._sortDirection;
  }

  private set sortDirection(value: string | null) {
    if (!this._sort) {
      this._sortDirection = null;
      return;
    }

    const dir = value ? `${value.toLowerCase()}` : null;
    if (dir) {
      this._sortDirection = dir !== 'asc' && dir !== 'desc' ? 'desc' : dir;
    }
  }

  get filter(): string | null {
    return this._filter;
  }

  private set filter(value: string | null) {
    this._filter =
      value === null || value === undefined || value === ''
        ? null
        : (`${value}` as any);
  }

  get field(): string | null {
    return this._field;
  }

  private set field(value: string | null) {
    this._field =
      value === null || value === undefined || value === ''
        ? null
        : (`${value}` as any);
  }

  get comparisonOperator() {
    return this._comparisonOperator;
  }

  private set comparisonOperator(value: string | null) {
    this._comparisonOperator =
      value === null ||
      value === undefined ||
      value === '' ||
      !Object.values(EOperators).includes(value as EOperators)
        ? null
        : `${value}`;
  }

  get dateField() {
    return this._dateField;
  }

  private set dateField(value: string | null) {
    this._dateField =
      value === null || value === undefined || value === '' ? null : `${value}`;
  }

  get status(): string | null {
    return this._status;
  }

  private set status(value: string) {
    this._status =
      value === null || value === undefined || value === '' ? null : `${value}`;
  }

  get from(): string | null {
    return this._from;
  }

  private set from(value: string) {
    this._from = !value ? null : value;
  }

  get to(): string | null {
    return this._to;
  }

  private set to(value: string) {
    this._to = !value ? null : value;
  }
}
