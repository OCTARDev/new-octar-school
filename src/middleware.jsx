import { NextResponse } from 'next/server';

// List of protected routes
const protectedRoutes = ['/dashboard', '/otp'];
// Routes to block for authenticated users
const authRoutes = ['/login', '/register'];

export function middleware(req) {
  const userCookie = req.cookies.get('user')?.value; // Assuming JWT is stored in cookies
  let user;

  try {
    user = !!userCookie ? JSON.parse(userCookie) : null; // Parse JSON string
  } catch (error) {
    console.error('Error parsing user cookie:', error);
    user = null;
  }

  const token = user?.token; // Safely access token
  const isVerified = !!user?.user.email_verified_at;
  const pathname = req.nextUrl.pathname;


  // Check if the requested path is a protected route or its descendant
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  // Check if the user is already logged in and trying to access auth pages
  const isAuthRoute = authRoutes.includes(pathname);

  // Redirect to login if user tries to access a protected route without a valid token
  if (isProtected && !token) {
    console.log('Redirecting to /login due to missing token');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirect logged-in users who are NOT verified to /otp
  if (token && !isVerified && pathname !== '/otp') {
    console.log('Redirecting to /otp due to unverified email');
    return NextResponse.redirect(new URL('/otp', req.url));
  }

  // Redirect Users from otp if they are verified
  if (pathname === '/otp' && isVerified) {
    console.log('Redirecting to /home from /otp due to verified email');
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // Redirect logged-in users away from /login and /register to /home
  if (isAuthRoute && token) {
    console.log('Redirecting to /home from auth route due to existing token');
    return NextResponse.redirect(new URL('/home', req.url));
  }

  return NextResponse.next(); // Allow request if authenticated
}

// Configure middleware to apply only on specific routes
export const config = {
  matcher: ['/otp', '/dashboard/:path*', '/login', '/register' , "/home/:path*"], // Define protected routes
};