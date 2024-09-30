import { City } from '../../../types/city.type.js';
import { OfferTypes } from '../../../../const.js';
import { Goods } from '../../../types/goods.type.js';
import { Location } from '../../../types/location.type.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public previewImage: string;
  public images: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: OfferTypes;
  public rooms: number;
  public guests: number;
  public price: number;
  public goods: Goods[];
  public userId: string;
  public location: Location;
}
