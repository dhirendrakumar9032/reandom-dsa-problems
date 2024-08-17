import React, { FC } from 'react';
import { DSAProblemComponentProps } from '@/type';
import styles from './index.module.scss'



const DSAProblemComponent:FC<DSAProblemComponentProps> = ({ title, difficulty, description, examples, constraints }) => {
    return (
        <div className={styles.problemContainer}>
            <h1>{title}</h1>
            <div className={styles.difficulty}>{difficulty}</div>
            <p>{description}</p>

            <h3>Examples</h3>
            {examples.map((example, index) => (
                <div key={index}>
                    <strong>Input:</strong> {example.input}
                    <br />
                    <strong>Output:</strong> {example.output}
                    <br />
                    <strong>Explanation:</strong> {example.explanation}
                </div>
            ))}

            <h3>Constraints</h3>
            <ul className={styles.constraint}>
                {constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                ))}
            </ul>
        </div>
    );
};

export { DSAProblemComponent };
