import { useFilterStore } from "@/store";
import { useEffect } from "react";


const useFilter = () => {
    const {  setSelectedCategory,selectedCategory,problemsData,setRandomeData, filteredData,setFilteredData, setSelectedDifficulty } = useFilterStore();


    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setSelectedDifficulty(null);
    };

    const handleDifficultyChange = (difficulty: string) => {
        setSelectedDifficulty(difficulty);
        setSelectedCategory(null);
    }


    const filterDataBasedOncategory = (category: string|null) =>{
        const filteredData= problemsData.filter((problem) => problem.category === category);
        console.log('xx1',filteredData,selectedCategory)
        setFilteredData(filteredData);
    }

    const hanndleRandomData = ()=>{
        if(filteredData.length){
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setRandomeData(filteredData[randomIndex]);
        }else{
            const randomIndex = Math.floor(Math.random() * problemsData.length);
            setRandomeData(problemsData[randomIndex]);
        }
    }

    
   

    return {
        handleCategoryChange,
        handleDifficultyChange,
        filterDataBasedOncategory,
        hanndleRandomData
    }
}

export { useFilter }