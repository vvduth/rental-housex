"use client";
import { PropertyInterface } from "@/types";
import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import {
  bookMarkProperty,
  checkBookMarkStatus,
} from "@/app/actions/bookmarkProperty";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
const BookmarkButton = ({ property }: { property: PropertyInterface }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    checkBookMarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property._id, userId, checkBookMarkStatus]);

  const onClickHandler = async () => {
    if (!userId) {
      toast.error("You need to sign in to bookmark a property");
      return;
    }

    try {
      const res = await bookMarkProperty(property._id);
      if (res.error) {
        toast.error(res.error);
      } else {
        setIsBookmarked(res.isBookmarked);
        toast.success(res.message);
      }
    } catch (error) {
      console.error("Error bookmarking property:", error);
      toast.error("Failed to bookmark property");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner loading={loading} />;
  }
  return isBookmarked ? (
    <button
      onClick={onClickHandler}
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      onClick={onClickHandler}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
