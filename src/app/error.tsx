"use client";

import Link from "next/link";

import { HOME_ROUTE } from "../constants/routes.constants";

const NotFoundPage = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-8">
      <h1 className="flex items-center justify-center text-6xl">
        Oops, this is bad, very bad, something happended
      </h1>

      <Link className="text-xl underline" href={HOME_ROUTE}>
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
