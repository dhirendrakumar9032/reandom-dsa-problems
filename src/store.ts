import { create } from 'zustand';
import { DSAProblemComponentProps } from './type';

interface FilterState {
  problemsData: DSAProblemComponentProps[];
  setProblemsData: (data: DSAProblemComponentProps[]) => void;
  selectedCategory: string | null;
  selectedDifficulty: string | null;
  filteredData: DSAProblemComponentProps[];
  setFilteredData: (data: DSAProblemComponentProps[])=>void;
  setSelectedCategory: (category: string | null) => void;
  setSelectedDifficulty: (difficulty: string | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategory: 'all',
  selectedDifficulty: null,
  problemsData: [],
  filteredData: [],
  setFilteredData: (data) => set({ filteredData: data }),
  setProblemsData: (data) => set({ problemsData: data }), 
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
}));
