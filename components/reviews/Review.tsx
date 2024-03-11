"use client";

import React from "react";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
// import { IReview } from "@/types/Product";
export interface IReview {
  id: number;
  name: string;
  review: string;
  rating: string;
  createdDt: string;
}
const Review = ({ reviews }: any) => {
  return (
    <>
      {reviews &&
        reviews.map((comment: any) => {
          return (
            <div key={comment.id}>
              <div className="flex gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                  <Image
                    className="aspect-square h-full w-full"
                    alt="@shadcn"
                    width={50}
                    height={50}
                    src="/images/placeholder-user.jpg"
                  />
                </span>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold"> {comment.name}</h3>
                      <time className="text-sm text-gray-500 dark:text-gray-400">
                        {comment.createdDt}
                      </time>
                    </div>
                    <div className="flex items-center gap-0.5 ml-auto">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i: number) => (
                          <span key={i}>
                            {i < comment.rating ? (
                              <FaStar className="text-amber-300" />
                            ) : (
                              <FaRegStar />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                    <p>{comment.review}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Review;
