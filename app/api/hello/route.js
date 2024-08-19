import { cookies, headers } from "next/headers";

export function GET(request) {
  const params = request.nextUrl.searchParams;
  const query = Object.fromEntries([...params.entries()]);
  cookies().set("token", "This is token");
  return Response.json({ message: "Hello, World!", query }, { status: 202 });
}

export async function POST(request) {
  try {
    const data = await request.json();
    const responseData = { message: "> I found your message", data };
    return new Response(JSON.stringify(responseData), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (err) {
    return Response.json(
      { message: "There is something wrong.", error: err.message },
      { status: 500 }
    );
  }
}
