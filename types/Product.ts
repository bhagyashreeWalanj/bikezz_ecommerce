export interface IReview {
  id: number;
  name: string;
  review: string;
  rating: string;
  createdDt: string;
}
export interface IReviewsProp {
  reviews: {
    id: number;
    name: string;
    review: string;
    rating: string;
    createdDt: string;
  }[];
}
interface Category {
  name: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  createdDt: string;
}

export interface IBike {
  id: string;
  name: string;
  imgpath: string;
  description: string;
  price: number;
  price_id: string;
  slug: string;
  categories: { name: string }[];
  reviews: {
    id: number;
    name: string;
    rating: number;
    review: string;
    createdDt: string;
  }[];
}

export interface IBikesMain {
  bikes: IBike[];
}
