import { v4 as uuidv4 } from 'uuid';

export class BaseEntity<Props = any> {
  private readonly _id: string;
  public props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id || uuidv4();
  }

  get id(): string {
    return this._id;
  }

  toJson(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
