# Authentication Implementation

This document describes the authentication system implemented for the Nexnode application.

## Overview

The authentication system includes:
- User registration and login
- Two-factor authentication (2FA)
- Password reset functionality
- Google OAuth integration
- Session management
- Route protection

## Features

### 1. User Registration (`/signup`)
- Form validation with Zod schemas
- Password strength requirements
- Role selection (Developer, Designer, Manager, Admin)
- Phone number and country code
- Terms and conditions agreement
- Google OAuth signup option

### 2. User Login (`/login`)
- Email and password authentication
- Remember me functionality
- Forgot password link
- Google OAuth login option
- Automatic redirect to 2FA if required

### 3. Two-Factor Authentication (`/two-factor`)
- 6-digit SMS verification code
- Code resend functionality
- Automatic redirect to dashboard on success

### 4. Password Reset (`/forgot-password`)
- Email-based password reset
- Reset link generation
- New password creation with validation

### 5. Session Management
- JWT-based session tokens
- Secure HTTP-only cookies
- Automatic token expiration handling
- Session cleanup on logout

## API Endpoints

The authentication service expects the following API endpoints:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `POST /auth/google` - Google OAuth authentication

### Two-Factor Authentication
- `POST /auth/2fa/verify` - Verify 2FA code
- `POST /auth/2fa/resend` - Resend 2FA code

### Password Reset
- `POST /auth/reset-password` - Send reset email
- `POST /auth/reset-password/confirm` - Confirm new password

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## File Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── two-factor/page.tsx
│   │   └── forgot-password/
│   │       ├── page.tsx
│   │       └── create-new-password/page.tsx
│   └── services/
│       └── auth/
│           ├── index.ts
│           ├── sessions.ts
│           └── types.ts
├── components/
│   └── ui/
│       ├── select.tsx
│       └── otp-input.tsx
├── hooks/
│   └── use-auth.ts
├── lib/
│   ├── axios.ts
│   └── schemas.ts
└── middleware.ts
```

## Usage

### 1. Authentication Hook

```typescript
import { useAuth } from '@/hooks/use-auth';

function MyComponent() {
  const { user, loading, logout, refreshUser } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### 2. Protected Routes

The middleware automatically protects routes and redirects unauthenticated users to the login page.

### 3. Form Validation

All forms use Zod schemas for validation:

```typescript
import { loginSchema } from '@/lib/schemas';

const form = useForm({
  resolver: zodResolver(loginSchema),
  defaultValues: {
    email: "",
    password: "",
  },
});
```

## Security Features

1. **HTTP-only Cookies**: Session tokens are stored in secure HTTP-only cookies
2. **JWT Validation**: Server-side JWT validation with expiration checks
3. **CSRF Protection**: Built-in CSRF protection through Next.js
4. **Input Validation**: Client and server-side validation with Zod
5. **Rate Limiting**: API endpoints should implement rate limiting
6. **Password Requirements**: Strong password requirements enforced

## Error Handling

The system includes comprehensive error handling:

- Network errors
- Validation errors
- Authentication errors
- Server errors
- User-friendly error messages with toast notifications

## Testing

To test the authentication system:

1. Start the development server: `npm run dev`
2. Navigate to `/signup` to create a new account
3. Test login functionality at `/login`
4. Test password reset at `/forgot-password`
5. Test 2FA if enabled

## Future Enhancements

- Email verification
- Social login (Facebook, GitHub, etc.)
- Multi-factor authentication options (TOTP, email codes)
- Account lockout after failed attempts
- Session management dashboard
- Audit logging 