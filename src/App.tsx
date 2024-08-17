import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { DSAProblemComponent } from './components/problemStatement';
import Problemtable from './components/ProblemTable';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFilterStore } from './store';
import { data } from './utils/data';
import { useFilter } from './hooks/useFilter';

function App() {

  const { problemsData, selectedCategory, filteredData, setProblemsData } = useFilterStore()
  const { filterDataBasedOncategory } = useFilter();

  useEffect(() => {
    filterDataBasedOncategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setProblemsData(data)
  }, [])

  const ProblemDetail = () => {
    const { title } = useParams<{ title: string }>();
    const decodedTitle = decodeURIComponent(title || '').replace(/-/g, ' ');
    const problem = problemsData.find((problem) => problem?.title.toLowerCase() === decodedTitle.toLowerCase());

    if (!problem) {
      return <div>Problem not found</div>;
    }

    return <DSAProblemComponent {...problem} />;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Problemtable problemsData={selectedCategory ? problemsData : filteredData} />,
    },
    {
      path: "/problem/:title",
      element: <ProblemDetail />,
    }
  ]);

  return (
    <div className={styles.app}>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
