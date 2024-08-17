import React from 'react';
import logo from '../../../assets/logo.png';
import styles from './index.module.scss';
import { useFilterStore } from '@/store';
import { Select } from 'antd';
import { useFilter } from '@/hooks/useFilter';

const Navbar = () => {
  const { selectedCategory, setSelectedCategory, setSelectedDifficulty } = useFilterStore();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
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
