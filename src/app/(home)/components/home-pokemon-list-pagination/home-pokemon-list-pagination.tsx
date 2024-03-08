import Link from "next/link";
import { DEFAULT_PAGINATION_MODIFIER } from "../../constants/pagination.constants";

type HomePokemonListPaginationProps = {
  paginationOffset: number;
  urlName: string | null;
};

const HomePokemonListPagination = ({
  paginationOffset,
  urlName,
}: HomePokemonListPaginationProps) => {
  const nextPaginationOffset = paginationOffset + DEFAULT_PAGINATION_MODIFIER;
  const prevPaginationOffset =
    paginationOffset <= 0
      ? paginationOffset
      : paginationOffset - DEFAULT_PAGINATION_MODIFIER;

  const getPaginationUrl = (
    paginationOffset: number,
    urlName: string | null,
  ): string =>
    `/?offset=${paginationOffset}${urlName ? `&name=${urlName}` : ""}`;

  return (
    <div
      className="flex items-center justify-center gap-4"
      data-testid="pokemon-list-pagination"
    >
      <Link
        className="rounded border p-2"
        href={getPaginationUrl(prevPaginationOffset, urlName)}
      >
        Prev
      </Link>
      <Link
        className="rounded border p-2"
        href={getPaginationUrl(nextPaginationOffset, urlName)}
      >
        Next
      </Link>
    </div>
  );
};

export default HomePokemonListPagination;
