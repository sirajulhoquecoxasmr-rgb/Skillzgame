export type TabType = 
  | 'home' 
  | 'matches' 
  | 'wallet' 
  | 'transactions' 
  | 'profile' 
  | 'upload_result' 
  | 'auto_ludo' 
  | 'live_ludo' 
  | 'block_puzzle'
  | 'admin';

export type MatchCategory = 'special' | 'time' | 'one_player';

// ==========================================
// BLOCK PUZZLE DUEL TYPES
// ==========================================
export type BlockGameMode = 
  | 'duel' 
  | 'practice' 
  | 'private_room' 
  | 'ranked' 
  | 'tournament';

export type PracticeDifficulty = 'easy' | 'normal' | 'hard' | 'expert';

export type SpecialBlockType = 'bomb' | 'lightning' | 'hammer' | 'shuffle';

export interface BlockShape {
  id: string;
  matrix: number[][]; // 2D grid representation (1: filled, 0: empty)
  color: string;
  accentColor: string;
  name: string;
  isSpecial?: boolean;
  specialType?: SpecialBlockType;
}

export interface BlockPlayerState {
  playerId: string;
  name: string;
  avatar: string;
  ready: boolean;
  connected: boolean;
  score: number;
  linesCleared: number;
  combo: number;
  bestCombo: number;
  streak: number;
  boardState: number[][]; // 8x8
  remainingTime: number; // in seconds
  lastActionTimestamp: number;
  isWinner?: boolean;
  ratingChange?: number;
  xpEarned?: number;
}

export interface BlockMatchMoveEvent {
  playerId: string;
  moveIndex: number;
  blockId: string;
  row: number;
  col: number;
  linesCleared: number;
  clearedRows: number[];
  clearedCols: number[];
  pointsEarned: number;
  totalScore: number;
  combo: number;
  timestamp: number;
  boardHash: string;
}

export interface BlockMatch {
  matchId: string;
  mode: BlockGameMode;
  difficulty?: PracticeDifficulty;
  seed: number;
  roomId?: string;
  status: 'searching' | 'countdown' | 'playing' | 'validating' | 'finished' | 'interrupted';
  startTime?: number;
  endTime?: number;
  durationSeconds: number;
  player1: BlockPlayerState;
  player2?: BlockPlayerState;
  winnerId?: string;
  isDraw?: boolean;
  serverValidated: boolean;
  eventsHistory: BlockMatchMoveEvent[];
}

export interface BlockLeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar: string;
  rating: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Master';
  wins: number;
  losses: number;
  winRate: number;
  bestScore: number;
}

export interface BlockAchievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  rewardXp: number;
}

export interface BlockTournament {
  id: string;
  title: string;
  entryFeeCoins: number; // Free / Virtual coins
  prizePoolCoins: number;
  participantsCount: number;
  maxParticipants: number;
  status: 'registration' | 'round_1' | 'quarter' | 'semi' | 'finals' | 'completed';
  startTime: string;
}

export type TransactionType = 
  | 'match_loss' 
  | 'match_win' 
  | 'refund' 
  | 'deposit' 
  | 'withdraw' 
  | 'admin_add' 
  | 'admin_deduct';

export interface User {
  id: string;
  name: string;
  phone: string;
  password?: string;
  isAdmin?: boolean;
  ludoKingName: string;
  gamingBalance: number;
  winningBalance: number;
  matchesPlayed: number;
  totalWinnings: number;
  referralCode: string;
  referredBy?: string;
  joinedAt: string;
  avatarUrl?: string;
  isBanned?: boolean;
}

export interface JoinedPlayer {
  userId?: string;
  name: string;
  ludoKingName: string;
  phone?: string;
  joinedAt: string;
}

export interface Match {
  id: string;
  matchNo: string;
  title: string;
  subtitle: string;
  category: MatchCategory;
  totalPrize: number;
  entryFee: number;
  version: string;
  boardType: string;
  totalSeats: number;
  joinedSeats: number;
  joinedPlayers: JoinedPlayer[];
  status: 'open' | 'waiting_room_id' | 'ready_to_play' | 'running' | 'completed' | 'cancelled' | 'full';
  roomCode?: string;
  matchTime?: string;
  dailyLimit?: string;
  isHot?: boolean;
  winnerId?: string;
  winnerName?: string;
}

export interface Transaction {
  id: string;
  userId?: string;
  trxNumber: string;
  type: TransactionType;
  title: string;
  subtitle: string;
  amount: number;
  status: 'COMPLETED' | 'SUCCESS' | 'PENDING' | 'REJECTED';
  date: string;
  matchId?: string;
  roomCode?: string;
  paymentMethod?: string;
  trxId?: string;
  category: 'all' | 'match' | 'deposit' | 'withdraw' | 'admin';
}

export interface DepositRequest {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  method: 'bKash' | 'Nagad' | 'Rocket' | 'Upay';
  amount: number;
  senderNumber: string;
  trxId: string;
  timestamp: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  rejectReason?: string;
}

export interface WithdrawRequest {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  method: 'bKash' | 'Nagad' | 'Rocket';
  accountType: 'Personal' | 'Agent';
  accountNumber: string;
  amount: number;
  timestamp: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  adminTrxId?: string;
  rejectReason?: string;
}

export interface LeaderboardPlayer {
  rank: number;
  name: string;
  matchesWon: number;
  totalEarnings: number;
  avatar?: string;
}

export interface ResultSubmission {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  ludoKingName?: string;
  matchId?: string;
  matchNo?: string;
  roomCode: string;
  imageUrl?: string;
  prizeAmount: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
  adminNote?: string;
}

export interface PaymentSettings {
  bkash: string;
  nagad: string;
  rocket: string;
  upay: string;
  whatsappSupport: string;
  telegramLink: string;
  marqueeNotice: string;
  popupNoticeTitle: string;
  popupNoticeText: string;
}

