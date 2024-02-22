import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import firebase_app from './resources/firebase/config';

const auth = getAuth(firebase_app);

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('entro al middleware');

  const unsubscribe = await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('aceptado', user);

    } else {
      console.log('no aceptado', user);

    }

  });

  await unsubscribe();
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/alumnos',
    '/check'
  ]
}