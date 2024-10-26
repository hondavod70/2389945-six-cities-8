export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
    invalidFormat: 'Title must be a string',
  },

  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },

  postDate: {
    invalidFormat: 'createdDate must be a valid ISO date',
  },

  city: {
    invalid: 'Invalid city name',
  },

  previewImage: {
    invalidFormat: 'Field previewImage must be string',
  },

  images: {
    invalidFormat: 'Field images must be an array',
    length: 'Field images must contain 6 elements',
  },

  isPremium: { invalidFormat: 'Field isPremium must be boolean' },

  isFavorite: { invalidFormat: 'Field isFavorite must be boolean' },

  type: {
    invalid: 'type must be apartment, house, room or hotel',
  },

  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 200000',
  },

  rooms: {
    invalidFormat: 'Rooms must be an integer',
    minValue: 'Minimum rooms is 1',
    maxValue: 'Maximum rooms is 8',
  },

  guests: {
    invalidFormat: 'Guests must be an integer',
    minValue: 'Minimum guests is 1',
    maxValue: 'Maximum maxAdults is 10',
  },

  rating: {
    invalidFormat: 'Rating must be an number',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },

  goods: {
    invalidFormat: 'Field goods must be an array',
  },

  userId: {
    invalidId: 'userId field must be a valid id',
  },

  location: {
    invalidFormat: 'Field location must be object',
  },
} as const;
