export class Music {
  constructor(
    private _id: string,
    private _playlistId: string,
    private _name: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get playlistId(): string {
    return this._playlistId;
  }

  public toJSON() {
    return {
      id: this._id,
      playlistId: this._playlistId,
      name: this._name,
    };
  }
}
