import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public avatarUrl: string;

  @Expose()
  public password: string;

  @Expose()
  public isPro: boolean;
}
