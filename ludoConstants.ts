// Standard 15x15 Ludo Board Coordinates and Engine Constants

export interface CellCoord {
  r: number; // 0 to 14
  c: number; // 0 to 14
}

// 52 common outer path coordinates (Clockwise from Red Start)
export const MAIN_PATH: CellCoord[] = [
  /* 0 - Red Start (Safe) */ { r: 6, c: 1 },
  /* 1 */ { r: 6, c: 2 },
  /* 2 */ { r: 6, c: 3 },
  /* 3 */ { r: 6, c: 4 },
  /* 4 */ { r: 6, c: 5 },
  /* 5 */ { r: 5, c: 6 },
  /* 6 */ { r: 4, c: 6 },
  /* 7 */ { r: 3, c: 6 },
  /* 8 - Safe Star */ { r: 2, c: 6 },
  /* 9 */ { r: 1, c: 6 },
  /* 10 */ { r: 0, c: 6 },
  /* 11 */ { r: 0, c: 7 },
  /* 12 */ { r: 0, c: 8 },
  /* 13 - Blue/Top Start */ { r: 1, c: 8 },
  /* 14 */ { r: 2, c: 8 },
  /* 15 */ { r: 3, c: 8 },
  /* 16 */ { r: 4, c: 8 },
  /* 17 */ { r: 5, c: 8 },
  /* 18 */ { r: 6, c: 9 },
  /* 19 */ { r: 6, c: 10 },
  /* 20 */ { r: 6, c: 11 },
  /* 21 - Safe Star */ { r: 6, c: 12 },
  /* 22 */ { r: 6, c: 13 },
  /* 23 */ { r: 6, c: 14 },
  /* 24 */ { r: 7, c: 14 },
  /* 25 */ { r: 8, c: 14 },
  /* 26 - Green Start (Safe) */ { r: 8, c: 13 },
  /* 27 */ { r: 8, c: 12 },
  /* 28 */ { r: 8, c: 11 },
  /* 29 */ { r: 8, c: 10 },
  /* 30 */ { r: 8, c: 9 },
  /* 31 */ { r: 9, c: 8 },
  /* 32 */ { r: 10, c: 8 },
  /* 33 */ { r: 11, c: 8 },
  /* 34 - Safe Star */ { r: 12, c: 8 },
  /* 35 */ { r: 13, c: 8 },
  /* 36 */ { r: 14, c: 8 },
  /* 37 */ { r: 14, c: 7 },
  /* 38 */ { r: 14, c: 6 },
  /* 39 - Yellow/Bottom Start */ { r: 13, c: 6 },
  /* 40 */ { r: 12, c: 6 },
  /* 41 */ { r: 11, c: 6 },
  /* 42 */ { r: 10, c: 6 },
  /* 43 */ { r: 9, c: 6 },
  /* 44 */ { r: 8, c: 5 },
  /* 45 */ { r: 8, c: 4 },
  /* 46 */ { r: 8, c: 3 },
  /* 47 - Safe Star */ { r: 8, c: 2 },
  /* 48 */ { r: 8, c: 1 },
  /* 49 */ { r: 8, c: 0 },
  /* 50 */ { r: 7, c: 0 },
  /* 51 */ { r: 6, c: 0 },
];

// Red's home column corridor (Steps 51 to 56)
export const RED_HOME_PATH: CellCoord[] = [
  { r: 7, c: 1 },
  { r: 7, c: 2 },
  { r: 7, c: 3 },
  { r: 7, c: 4 },
  { r: 7, c: 5 },
  { r: 7, c: 6 }, // Center Goal
];

// Green's home column corridor (Steps 51 to 56)
export const GREEN_HOME_PATH: CellCoord[] = [
  { r: 7, c: 13 },
  { r: 7, c: 12 },
  { r: 7, c: 11 },
  { r: 7, c: 10 },
  { r: 7, c: 9 },
  { r: 7, c: 8 }, // Center Goal
];

// Safe Star path indices on MAIN_PATH
export const SAFE_INDICES = [0, 8, 13, 21, 26, 34, 39, 47];

// Yard positions for tokens when in base
export const RED_YARD_SPOTS: CellCoord[] = [
  { r: 1.8, c: 1.8 },
  { r: 1.8, c: 3.8 },
  { r: 3.8, c: 1.8 },
  { r: 3.8, c: 3.8 },
];

export const GREEN_YARD_SPOTS: CellCoord[] = [
  { r: 10.8, c: 10.8 },
  { r: 10.8, c: 12.8 },
  { r: 12.8, c: 10.8 },
  { r: 12.8, c: 12.8 },
];

// Center Goal coordinate
export const CENTER_GOAL: CellCoord = { r: 7, c: 7 };

export interface LudoToken {
  id: number;
  color: 'red' | 'green';
  step: number; // -1 = Yard, 0..50 = Main Path, 51..55 = Home Runway, 56 = Home Goal
  position: CellCoord;
  isHome: boolean;
}

export interface LivePlayer {
  id: string;
  name: string;
  avatar: string;
  color: 'red' | 'green';
  isBot?: boolean;
  score: number;
  tokensHome: number;
  ping?: number;
  location?: string;
  winRate?: string;
  level?: number;
}

export const BOT_OPPONENTS: Array<{ name: string; avatar: string; ping: number; location: string; winRate: string; level: number }> = [
  { name: 'Tanvir Ahmed', avatar: '👨‍💼', ping: 24, location: 'Dhaka', winRate: '68%', level: 28 },
  { name: 'MD. Shakil Hossain', avatar: '🧔', ping: 31, location: 'Chittagong', winRate: '72%', level: 34 },
  { name: 'Rakibul Islam Pro', avatar: '😎', ping: 19, location: 'Sylhet', winRate: '65%', level: 19 },
  { name: 'Sadia Sultana', avatar: '🧕', ping: 27, location: 'Rajshahi', winRate: '70%', level: 25 },
  { name: 'Nayem Gaming', avatar: '🎮', ping: 18, location: 'Khulna', winRate: '74%', level: 42 },
  { name: 'Mehedi Hasan', avatar: '👑', ping: 22, location: 'Cumilla', winRate: '69%', level: 31 },
  { name: 'Ludo King VIP', avatar: '⚡', ping: 15, location: 'Gazipur', winRate: '77%', level: 50 },
  { name: 'Jannat Akter', avatar: '🌸', ping: 35, location: 'Barishal', winRate: '63%', level: 16 },
  { name: 'Fahim Morshed', avatar: '🚀', ping: 20, location: 'Narayanganj', winRate: '71%', level: 33 },
  { name: 'Hasan Ali Master', avatar: '🎯', ping: 26, location: 'Rangpur', winRate: '66%', level: 22 },
];

export const CHAT_REACTIONS = [
  { id: '1', emoji: '🔥', text: 'খেলা হবে!' },
  { id: '2', emoji: '😎', text: 'ভালো চাল!' },
  { id: '3', emoji: '😂', text: 'কপাল খারাপ!' },
  { id: '4', emoji: '👏', text: 'ওয়েল প্লেড!' },
  { id: '5', emoji: '⏱️', text: 'তাড়াতাড়ি চালুন!' },
  { id: '6', emoji: '🏆', text: 'আমিই জিতবো!' },
];
