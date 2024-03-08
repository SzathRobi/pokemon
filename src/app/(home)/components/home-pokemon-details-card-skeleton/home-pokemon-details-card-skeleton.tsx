const HomePokemonDetailsCardSkeleton = () => {
  return (
    <div
      className="animate-pulse px-2"
      data-testid="pokemon-details-card-skeleton"
    >
      <div className="mx-auto mb-8 size-64 bg-slate-200" />

      <div>
        <div className="mb-4 h-8 w-24 bg-slate-400" />

        <div className="mb-8 flex items-start justify-start gap-24">
          <div>
            <div className="mb-1 h-4 w-16 bg-slate-400" />
            <div className="mb-2 h-4 w-8 bg-slate-200" />

            <div className="mb-1 h-4 w-16 bg-slate-400" />
            <div className="h-4 w-8 bg-slate-200" />
          </div>

          <div>
            <div className="mb-1 h-4 w-16 bg-slate-400" />
            <div className="flex flex-wrap items-start justify-start gap-1">
              <div className="h-4 w-24 bg-slate-200" />
              <div className="h-4 w-24 bg-slate-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 w-full bg-slate-500" />
    </div>
  );
};

export default HomePokemonDetailsCardSkeleton;
