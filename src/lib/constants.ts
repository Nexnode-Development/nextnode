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

// Sample data for consistent demos
export const SAMPLE_PROJECTS = [
  {
    id: '1',
    name: 'Web Development Platform',
    description: 'A comprehensive web development platform with modern tools and frameworks.',
    progress: 75,
    status: 'In Progress',
    deadline: '2024-12-31',
    team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
    budget: '$15,000',
    priority: 'high',
  },
  {
    id: '2',
    name: 'Mobile App Redesign',
    description: 'Complete redesign of the mobile application with improved UX/UI.',
    progress: 40,
    status: 'In Progress',
    deadline: '2024-11-15',
    team: ['Sarah Wilson', 'Tom Brown'],
    budget: '$8,500',
    priority: 'medium',
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Integration of third-party APIs for enhanced functionality.',
    progress: 90,
    status: 'Near Completion',
    deadline: '2024-10-30',
    team: ['Alex Chen', 'Maria Garcia'],
    budget: '$5,200',
    priority: 'high',
  },
  {
    id: '4',
    name: 'Database Migration',
    description: 'Migration of legacy database to modern cloud infrastructure.',
    progress: 25,
    status: 'Planning',
    deadline: '2025-01-31',
    team: ['David Lee', 'Emma Davis'],
    budget: '$12,000',
    priority: 'low',
  },
  {
    id: '5',
    name: 'Security Audit',
    description: 'Comprehensive security audit and implementation of best practices.',
    progress: 60,
    status: 'In Progress',
    deadline: '2024-11-30',
    team: ['Robert Taylor', 'Lisa Johnson'],
    budget: '$7,800',
    priority: 'high',
  },
] as const;

export const SAMPLE_TEAM_MEMBERS = [
  { name: 'John Doe', role: 'Project Manager', avatar: 'JD', status: 'online' },
  { name: 'Jane Smith', role: 'Lead Developer', avatar: 'JS', status: 'online' },
  { name: 'Mike Johnson', role: 'Designer', avatar: 'MJ', status: 'offline' },
  { name: 'Sarah Wilson', role: 'QA Engineer', avatar: 'SW', status: 'online' },
  { name: 'Tom Brown', role: 'DevOps', avatar: 'TB', status: 'away' },
  { name: 'Alex Chen', role: 'Frontend Developer', avatar: 'AC', status: 'online' },
  { name: 'Maria Garcia', role: 'Backend Developer', avatar: 'MG', status: 'online' },
  { name: 'David Lee', role: 'Database Admin', avatar: 'DL', status: 'offline' },
] as const;

export const SAMPLE_MESSAGES = [
  {
    id: '1',
    sender: 'John Doe',
    message: 'Hey team, can we discuss the project timeline?',
    time: '2m ago',
    unread: true,
    avatar: 'JD',
  },
  {
    id: '2',
    sender: 'Jane Smith',
    message: 'The development report is ready for review',
    time: '1h ago',
    unread: false,
    avatar: 'JS',
  },
  {
    id: '3',
    sender: 'Mike Johnson',
    message: 'Design mockups updated, please check',
    time: '3h ago',
    unread: false,
    avatar: 'MJ',
  },
  {
    id: '4',
    sender: 'Sarah Wilson',
    message: 'Found some bugs in the latest build',
    time: '1d ago',
    unread: true,
    avatar: 'SW',
  },
] as const;

export const SAMPLE_REPORTS = [
  {
    title: 'Project Performance',
    description: 'Comprehensive analysis of project completion rates and efficiency metrics.',
    type: 'performance',
    lastGenerated: '2024-01-15',
  },
  {
    title: 'Team Productivity',
    description: 'Individual and team productivity insights with performance indicators.',
    type: 'productivity',
    lastGenerated: '2024-01-10',
  },
  {
    title: 'Financial Summary',
    description: 'Budget allocation, expenses, and financial forecasting reports.',
    type: 'financial',
    lastGenerated: '2024-01-12',
  },
  {
    title: 'Resource Utilization',
    description: 'Analysis of resource allocation and optimization opportunities.',
    type: 'resources',
    lastGenerated: '2024-01-08',
  },
  {
    title: 'Timeline Analysis',
    description: 'Project timeline adherence and deadline performance metrics.',
    type: 'timeline',
    lastGenerated: '2024-01-14',
  },
  {
    title: 'Quality Metrics',
    description: 'Code quality, testing coverage, and defect tracking reports.',
    type: 'quality',
    lastGenerated: '2024-01-09',
  },
] as const;

export const FINANCIAL_DATA = {
  totalBudget: 125000,
  allocated: 89500,
  spent: 67800,
  remaining: 57200,
  monthlyBurn: 12500,
  projectAllocations: [
    { project: 'Web Development Platform', allocated: 25000, spent: 18750 },
    { project: 'Mobile App Redesign', allocated: 15000, spent: 12200 },
    { project: 'API Integration', allocated: 18000, spent: 16500 },
    { project: 'Database Migration', allocated: 20000, spent: 8900 },
    { project: 'Security Audit', allocated: 11500, spent: 11450 },
  ],
} as const; 