const HomePokemonListSkeleton = () => {
  return (
    <div
      className="mb-4 max-h-96 animate-pulse"
      data-testid="pokemon-list-skeleton"
    >
      <div className="rounded border bg-slate-100 p-6">
        <div className="h-4 w-24 rounded bg-slate-400"></div>
      </div>

      <div className="rounded border bg-slate-100 p-6">
        <div className="h-4 w-24 rounded bg-slate-400"></div>
      </div>

      <div className="rounded border bg-slate-100 p-6">
        <div className="h-4 w-24 rounded bg-slate-400"></div>
      </div>

      <div className="rounded border bg-slate-100 p-6">
        <div className="h-4 w-24 rounded bg-slate-400"></div>
      </div>

      <div className="rounded border bg-slate-100 p-6">
        <div className="h-4 w-24 rounded bg-slate-400"></div>
      </div>
    </div>
  );
};

export default HomePokemonListSkeleton;
