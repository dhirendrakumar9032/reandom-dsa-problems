import { create } from 'zustand';
import { DSAProblemComponentProps } from './type';
import { data } from './utils/data';

interface FilterState {
  randomData:DSAProblemComponentProps|null;
  setRandomeData:(randomData:DSAProblemComponentProps|null)=>void;
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
  problemsData: data,
  filteredData: [],
  randomData:null,
  setRandomeData:(data)=>set({randomData: data}),
  setFilteredData: (data) => set({ filteredData: data }),
  setProblemsData: (data) => set({ problemsData: data }), 
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
}));
