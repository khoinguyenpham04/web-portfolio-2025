import { create } from 'zustand'

interface SeasonState {
  season: 'christmas' | 'spring' | 'none'
  toggleSeason: () => void
}

export const useSeasonStore = create<SeasonState>((set) => ({
  season: 'spring',
  toggleSeason: () => set((state) => ({ 
    season: state.season === 'spring' ? 'none' : 
            state.season === 'none' ? 'christmas' : 'spring' 
  })),
}))
