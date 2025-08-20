import { NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
// List of protected routes

// Routes to block for authenticated users

// Supported locales
const locales = ['en', 'ar'];
const defaultLocale = 'en';

export function middleware(request) {
  const userCookie = request.cookies.get('user')?.value; // Assuming JWT is stored in cookies
  
  const protectedPaths = ['/dashboard', '/otp'];
  const protectedPathForLoggedIn = ['/login', '/register'];
  const teacherProtectedPaths = [
    '/home/teacher-portal',
    '/dashboard/teacher',
  ];
  const schoolProtectedPaths = [
    '/dashboard/school',
  ];

  const requestedPath = request.nextUrl.pathname;
  const isVerifyPage = requestedPath.startsWith("/otp");
  const pathname = request.nextUrl.pathname;


  let user;



  try {
    user = !!userCookie ? JSON.parse(userCookie) : null; // Parse JSON string
  } catch (error) {
    console.error('Error parsing user cookie:', error);
    user = null;
  }

  /* console.log(user.user); */
  

  // Protect /dashboard /otp for unauthenticated users
  if (protectedPaths.some((path) => pathname.startsWith(path)) ) {   
    if (!user) {
      console.log('Redirecting to /login due to missing token');
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect unverified users to /home/verify-email (excluding itself)
/*     if (!user?.user?.email_verified_at && !isVerifyPage) {
      console.log('Redirecting to /otp due to unverified email');
      return NextResponse.redirect(new URL(`/otp`, request.url));
    } */
  }

  // Prevent verified users from accessing /otp
  if (isVerifyPage && user?.user?.email_verified_at) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Public routes: prevent logged-in users from accessing login or sign-up
  if (protectedPathForLoggedIn.some((path) => pathname.startsWith(path))) {
    if (user) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  };

  // Protect /home/teacher-portal for users with role !== "teacher"
  if (teacherProtectedPaths.some((path) => pathname.includes(path))) {
    console.log("Checking user role for teacher portal access");
    
    if (!user || user?.user?.role !== "teacher") {
      console.log('Redirecting to /home due to insufficient permissions');
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  // Protect /home/teacher-portal for users with role !== "school"
  if (schoolProtectedPaths.some((path) => pathname.includes(path))) {
    console.log("Checking user role for school portal access");
    
    if (!user || user?.user?.role !== "school") {
      console.log('Redirecting to /home due to insufficient permissions');
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }


  // Localization Middleware
  const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale
  });

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/(en|ar)/:path*', // Locale-specific routes
    '/home/:path*',
    '/login',
    '/register',
    '/otp',
    '/dashboard/:path*'
  ],
};

