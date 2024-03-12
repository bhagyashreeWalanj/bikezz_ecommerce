export interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (bikeId: string) => void;
  removeFromWishlist: (bikeId: string) => void;
}
