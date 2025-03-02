import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes: string[] = ["/"];
const publicRoutes: string[] = [
  "/auth/login",
  "/auth/signup",
  "/auth/forgot-password",
  "/auth/verification-code",
];

export default async function middleware(req: NextRequest): Promise<NextResponse> {
    const path: string = req.nextUrl.pathname;
    
    const isProtectedRoute: boolean = protectedRoutes.includes(path);
    const isPublicRoute: boolean = publicRoutes.includes(path);

    const token = (await cookies()).get("AUTH_USER_TOKEN");

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    }

    if (isPublicRoute && token && !req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
