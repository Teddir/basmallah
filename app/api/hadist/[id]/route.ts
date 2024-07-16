import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const data = await fs.readFile(
      process.cwd() + "/app/" + `lib/json/hadist/${id}.json`,
      "utf8"
    );
    return NextResponse.json({ ok: true, results: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "error get hadist" },
      { status: 400 }
    );
  }
}
