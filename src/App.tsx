
import React from 'react';
import styles from './App.module.scss';
import logo from '../assets/logo.webp';
import { DSAProblemComponent } from './components/problemStatement';

function App() {

  const problemData = {
    title: "Two Sum",
    difficulty: "Easy",
    type: 'Array',
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1, 2]",
        explanation: "The sum of 2 and 4 is 6."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0, 1]",
        explanation: "Each number is used once."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
    ]
  };

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="logo" />
        <ul className={styles.category}>
          <li>All</li>
          <li>Array</li>
          <li>String</li>
          <li>LinkedList</li>
          <li>Sorting Alogorthms</li>
          <li>Tree</li>
          <li>Dynamic Programing</li>
          <li>Graph</li>
          <li>Backtracking</li>
          <li>Greedy</li>
        </ul>
      </nav>
      <DSAProblemComponent {...problemData} />
    </div>
  );
}

export default App;
