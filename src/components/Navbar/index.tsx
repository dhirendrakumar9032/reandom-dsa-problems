import React from 'react';
import logo from '../../../assets/logo.png';
import styles from './index.module.scss';
import { useFilterStore } from '@/store';
import { Button, Select } from 'antd';
import { useFilter } from '@/hooks/useFilter';
import { useParams } from 'react-router-dom';

const Navbar = () => {
  const { selectedCategory, setSelectedCategory, setSelectedDifficulty } = useFilterStore();
  const { filterDataBasedOncategory,hanndleRandomData } = useFilter();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    filterDataBasedOncategory(value)
  };

 

  const categoryOptions = [
    { label: 'All', value: 'all' },
    { label: 'Array', value: 'Array' },
    { label: 'String', value: 'String' },
    { label: 'Tree', value: 'Tree' },
  ];

  return (
    <nav className={styles.navbar}>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className={styles.selectorContainer}>
        <Button className={styles.nextButton} onClick={hanndleRandomData}>Next</Button>
        <Select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className={styles.selector}
          options={categoryOptions}
        />

      </div>
    </nav>
  );
};

export default Navbar;
