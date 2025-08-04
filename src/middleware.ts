import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Get the session token from cookies
  const sessionToken = request.cookies.get('nexnode-session')?.value
  
  // Define public routes that don't require authentication
  const publicRoutes = ['/login', '/signup', '/forgot-password', '/two-factor', '/create-new-password']
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))
  
  // Define auth routes (login, signup, etc.)
  const authRoutes = ['/login', '/signup', '/forgot-password', '/two-factor', '/create-new-password']
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  
  // If user is on a public route and has a valid session, redirect to dashboard
  // if (isAuthRoute && sessionToken) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  
  // If user is on a protected route and doesn't have a session, redirect to login
  // if (!isPublicRoute && !sessionToken) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 