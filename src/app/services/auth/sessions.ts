import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

interface SessionPayload {
  access_token: string;
}

interface JWTPayload {
  user_id: string;
  email: string;
  role: string;
  exp: number;
  iat: number;
}

export async function createSession(payload: SessionPayload): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.set('nexnode-session', payload.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get('nexnode-session');
  
  if (!session) {
    return null;
  }

  try {
    const decoded = jwtDecode<JWTPayload>(session.value);
    
    // Check if token is expired
    if (decoded.exp * 1000 < Date.now()) {
      await deleteSession();
      return null;
    }
    
    return session.value;
  } catch (error) {
    console.error('Error decoding session token:', error);
    await deleteSession();
    return null;
  }
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('nexnode-session');
}

export async function isAdmin(): Promise<boolean> {
  const token = await getSession();
  
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode<JWTPayload>(token);
    return decoded.role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

export async function getUserFromSession(): Promise<JWTPayload | null> {
  const token = await getSession();
  
  if (!token) {
    return null;
  }

  try {
    const decoded = jwtDecode<JWTPayload>(token);
    return decoded;
  } catch (error) {
    console.error('Error getting user from session:', error);
    return null;
  }
}
