import Link from "next/link";
import { CgPokemon } from "react-icons/cg";

import { HOME_ROUTE } from "../constants/routes.constants";

const NotFoundPage = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-8">
      <h1 className="flex items-center justify-center text-6xl">
        <span>4</span>
        <CgPokemon />
        <span>4</span>
      </h1>

      <h2 className="text-2xl">
        Oops, we could not find the pokeball you are looking for
      </h2>

      <Link className="text-xl underline" href={HOME_ROUTE}>
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
