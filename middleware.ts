import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the public routes
const publicRoutes = ['/sign-in(.*)', '/sign-up(.*)', '/','/F/(.*)'];

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware((auth, request) => {
  // Protect all routes that are not public
  if (!isPublicRoute(request)) {
    auth().protect();
  }

  return NextResponse.next();
});

// Matcher configuration
export const config = {
  matcher: [
    // Apply middleware to all routes except Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always apply to API routes
    '/(api|trpc)(.*)',
  ],
};