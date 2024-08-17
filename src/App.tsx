import React from 'react';
import styles from './App.module.scss';
import { DSAProblemComponent } from './components/problemStatement';
import Problemtable from './components/ProblemTable';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFilterStore } from './store';
import { useFilter } from './hooks/useFilter';

function App() {

  const { problemsData, selectedCategory, filteredData, randomData } = useFilterStore();
  const { hanndleRandomData } = useFilter();

  const ProblemDetail = () => {
    const { title } = useParams<{ title: string }>();
    const decodedTitle = decodeURIComponent(title || '').replace(/-/g, ' ');
    let problem = problemsData.find((problem) => problem?.title.toLowerCase() === decodedTitle.toLowerCase());

    if(randomData){
      problem = randomData;
    }

    if (!problem) {
      return <div>Problem not found</div>;
    }

    return <DSAProblemComponent {...problem} />;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Problemtable problemsData={selectedCategory == 'all' ? problemsData : filteredData} />,
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
