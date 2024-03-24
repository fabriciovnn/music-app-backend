export class Playlist {
  constructor(
    private _id: string,
    private _userId: string,
    private _name: string,
    private _genre: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get userId(): string {
    return this._userId;
  }

  public get genre(): string {
    return this._genre;
  }

  public toJSON() {
    return {
      id: this._id,
      userId: this._userId,
      name: this._name,
      genre: this._genre,
    };
  }
}
