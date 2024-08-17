type DSAProblemComponentProps = {
    sn: number;
    title: string;
    difficulty: string;
    category: string;
    description: string;
    examples: Array<{ input: string, output: string, explanation: string }>;
    constraints: Array<string>;
    link?: string;
}

type ProblemtableProps={
    problemsData:DSAProblemComponentProps[]
}

export { DSAProblemComponentProps,ProblemtableProps }