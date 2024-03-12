"use client";
import React, { createContext, useContext, useState } from "react";

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (bikeId: string) => void;
  removeFromWishlist: (bikeId: string) => void;
}

interface WishlistProviderProps {
  children: React.ReactNode;
}
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = sessionStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
  });

  const addToWishlist = (bikeId: string) => {
    setWishlist((prev) => [...prev, bikeId]);
    sessionStorage.setItem("wishlist", JSON.stringify([...wishlist, bikeId]));
  };

  const removeFromWishlist = (bikeId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== bikeId));
    sessionStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist.filter((id) => id !== bikeId))
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
