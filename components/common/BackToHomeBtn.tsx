import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface IProp {
  containerStyle: string;
  handleOnClick?: () => void;
}
const BackToHomeBtn = ({ containerStyle, handleOnClick }: IProp) => {
  return (
    <>
      <div className={`${containerStyle}`}>
        <Link href="/">
          <button
            className="w-40 h-10 mx-auto flex items-center hover:text-primary dark:hover:text-primary"
            onClick={handleOnClick}
          >
            <ChevronLeft size={20} />
            Back to home
          </button>
        </Link>
      </div>
    </>
  );
};

export default BackToHomeBtn;
