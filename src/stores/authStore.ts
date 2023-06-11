import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { atom } from 'nanostores';

interface LoginResponse {
  data: { id: string; name: string; email: string; role: string };
  exp: number;
  iat: number;
}

export const emptyAuth = { id: '', name: '', email: '', role: '' };

export const $auth = atom(emptyAuth);

export function login({ token }: { token: string }): void {
  const data: LoginResponse = jwtDecode(token);
  Cookies.set('token', token, { secure: true, sameSite: 'strict', expires: data.exp });
  $auth.set(data.data);
}

export function logout(): void {
  Cookies.remove('token');
  $auth.set(emptyAuth);
}
