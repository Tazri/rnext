import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request.nextUrl);
  return NextResponse.rewrite(`${request.nextUrl.host}`, { status: 301 });
}

export const config = {
  matcher: ["/api/user/:path*"],
};
