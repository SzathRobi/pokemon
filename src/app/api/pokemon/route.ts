import { NextResponse } from "next/server";

import { db } from "@/src/lib/db";

export async function GET() {
  try {
    const catchedPokemons = await db.catchedPokemon.findMany();

    return NextResponse.json({ catchedPokemons });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}
