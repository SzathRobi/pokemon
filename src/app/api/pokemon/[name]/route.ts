import { NextResponse } from "next/server";

import {
  deleteCatchedPokemonByName,
  getCatchedPokemonByName,
} from "@/src/utils/catched-pokemon";
import { db } from "@/src/lib/db";

export async function GET(
  _: Request,
  { params }: { params: { name: string } },
) {
  try {
    const catchedPokemon = await getCatchedPokemonByName(params.name);

    return NextResponse.json({ catchedPokemon });
  } catch {
    return NextResponse.json(null);
  }
}

export async function POST(req: Request, _: Response) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ error: "Pokemon name is required" });
  }

  const existingCatchedPokemon = await getCatchedPokemonByName(name);

  if (existingCatchedPokemon) {
    return NextResponse.json({ error: "Pokemon alredy catched!" });
  }

  try {
    await db.catchedPokemon.create({
      data: { name },
    });

    return NextResponse.json({ success: `${name} is catched` });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}

export async function DELETE(req: Request, _: Response) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ error: "Pokemon name is required" });
  }

  try {
    await deleteCatchedPokemonByName(name);

    return NextResponse.json({ success: `${name} is released` });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}
