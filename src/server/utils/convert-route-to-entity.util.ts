const mapping: Record<string, string> = {
  organizations: 'organization',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
