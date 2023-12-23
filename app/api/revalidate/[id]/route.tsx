import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (params.id === "projects" || params.id === "skills") {
    revalidateTag(params.id);
    return NextResponse.json(
      { message: "Successfully Revalidated " },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      error: `Path is not Recognized`,
      code: "400",
    },
    {
      status: 400,
      statusText: "Path is not recognized",
    }
  );
}
