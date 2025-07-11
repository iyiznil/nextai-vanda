// Sample travel destinations for demo purposes
export const sampleDestinations = [
  {
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=600&fit=crop&auto=format',
    country: 'Brazil',
    title: 'Rio de Janeiro',
    rating: 5.0,
    reviews: 143,
    lat: -22.9068,
    lng: -43.1729,
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&auto=format',
    country: 'Italy',
    title: 'Dolomites',
    rating: 4.8,
    reviews: 210,
    lat: 46.4102,
    lng: 11.8440,
  },
  {
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=600&fit=crop&auto=format',
    country: 'Greece',
    title: 'Santorini',
    rating: 4.9,
    reviews: 189,
    lat: 36.3932,
    lng: 25.4615,
  },
  {
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=600&fit=crop&auto=format',
    country: 'Japan',
    title: 'Mount Fuji',
    rating: 4.7,
    reviews: 234,
    lat: 35.3606,
    lng: 138.7274,
  },
  {
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop&auto=format',
    country: 'Peru',
    title: 'Machu Picchu',
    rating: 4.9,
    reviews: 167,
    lat: -13.1631,
    lng: -72.5450,
  },
  {
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=400&h=600&fit=crop&auto=format',
    country: 'Iceland',
    title: 'Northern Lights',
    rating: 4.6,
    reviews: 198,
    lat: 64.9631,
    lng: -19.0208,
  }
];

export interface TravelDestination {
  image: string;
  country: string;
  title: string;
  rating: number;
  reviews: number;
  lat?: number;
  lng?: number;
}
