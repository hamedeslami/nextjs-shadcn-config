import { create } from 'zustand'

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  setTokens: (token: string, refreshToken: string) => void;
  removeTokens: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  refreshToken: null,
  setTokens: (token, refreshToken) => set({ token, refreshToken }),
  removeTokens: () => set({ token: null, refreshToken: null }),
}));