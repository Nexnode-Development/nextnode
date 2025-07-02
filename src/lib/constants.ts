// Design System Constants
export const COLORS = {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    600: '#4b5563',
    900: '#111827',
  },
} as const;

export const SPACING = {
  container: 'p-6',
  card: 'p-4',
  section: 'space-y-6',
} as const;

// Common page layouts
export const PAGE_LAYOUTS = {
  auth: 'min-h-screen flex',
  main: 'p-6 space-y-6 bg-gray-50 min-h-full',
  centered: 'min-h-screen bg-gray-50 flex items-center justify-center p-4',
} as const; 