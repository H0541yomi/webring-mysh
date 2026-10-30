import { readFile } from "node:fs/promises";

const text = await readFile("./sites.txt", "utf8");
const sites = text.split("\n").filter(Boolean) as string[];

export function GET(request: Request) {
  const direction = new URL(request.url).searchParams.get("direction");
  const origin = new URL(request.url).searchParams.get("origin");

  if (!direction || !origin) {
    return Response.json(
      {
        error:
          "Required params: {direction: <'next'|'back'>, origin: <string>}",
      },
      { status: 400 },
    );
  }

  if (!sites.includes(origin)) {
    return Response.json(
      { error: "Must be in the web ring to access redirects!" },
      { status: 400 },
    );
  }

  if (direction !== "next" && direction !== "back") {
    return Response.json(
      {
        error:
          'The "direction" query parameter must be either "next" or "back".',
      },
      { status: 400 },
    );
  }

  const index = sites.findIndex((site) => site === origin);
  if (direction === "next") {
    return Response.redirect(sites[(index + 1) % sites.length], 302);
  } else if (direction === "back") {
    return Response.redirect(
      sites[(index - 1 + sites.length) % sites.length],
      302,
    );
  }
}
