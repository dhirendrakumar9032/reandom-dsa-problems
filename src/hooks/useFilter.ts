import { useFilterStore } from "@/store";
import { useEffect } from "react";


const useFilter = () => {
    const {  setSelectedCategory,selectedCategory,problemsData, setProblemsData, selectedDifficulty,filteredData,setFilteredData, setSelectedDifficulty } = useFilterStore();


    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setSelectedDifficulty(null);
    };

    const handleDifficultyChange = (difficulty: string) => {
        setSelectedDifficulty(difficulty);
        setSelectedCategory(null);
    }

    console.log('=>',{ problemsData})

    const filterDataBasedOncategory = (category: string|null) =>{
        const filteredData= problemsData.filter((problem) => problem.category === category);
        setFilteredData(filteredData);
    }
    

    return {
        handleCategoryChange,
        handleDifficultyChange,
        filterDataBasedOncategory
    }
}

export { useFilter }