const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787/api').replace(/\/$/, '');

function token() { return localStorage.getItem('skillz_api_token') || ''; }
async function request<T>(path:string, options:RequestInit={}) {
  const headers = new Headers(options.headers);
  headers.set('Content-Type','application/json');
  const t=token(); if(t) headers.set('Authorization',`Bearer ${t}`);
  const res=await fetch(`${API_BASE}${path}`,{...options,headers});
  const data=await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
  return data as T;
}

export const backendApi = {
  health:()=>request<{ok:boolean;firebase:boolean}>('/health'),
  login:(phone:string,password:string)=>request<{token:string;user:any}>('/auth/login',{method:'POST',body:JSON.stringify({phone,password})}),
  register:(name:string,phone:string,password:string,refCode='')=>request<{token:string;user:any}>('/auth/register',{method:'POST',body:JSON.stringify({name,phone,password,refCode})}),
  users:()=>request<{users:any[]}>('/users'),
  matches:()=>request<{matches:any[]}>('/matches'),
  createMatch:(match:any)=>request('/matches',{method:'POST',body:JSON.stringify(match)}),
  setRoom:(id:string,roomCode:string)=>request(`/matches/${id}/room`,{method:'PATCH',body:JSON.stringify({roomCode})}),
  deleteMatch:(id:string)=>request(`/matches/${id}`,{method:'DELETE'}),
  cancelMatch:(id:string,reason='')=>request(`/matches/${id}/cancel`,{method:'POST',body:JSON.stringify({reason})}),
  adjustBalance:(id:string,balanceType:string,amount:number,isAddition:boolean,note='')=>request(`/users/${id}/balance`,{method:'POST',body:JSON.stringify({balanceType,amount,isAddition,note})}),
  toggleBan:(id:string,banned:boolean)=>request(`/users/${id}/ban`,{method:'PATCH',body:JSON.stringify({banned})}),
  settings:()=>request('/settings'),
  updateSettings:(settings:any)=>request('/settings',{method:'PATCH',body:JSON.stringify(settings)}),
};
