import { parse } from 'cookie';
export function isAdmin(req) {
  const cookies = parse(req ? req?.headers.cookie || '' : document.cookie);
  return cookies.admin_auth === 'true';
}
