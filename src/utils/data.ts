const data = [
  {
    "sn": 1,
    "title": "Two Sum",
    "difficulty": "Easy",
    "category": "Array",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0, 1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1, 2]",
        "explanation": "The sum of 2 and 4 is 6."
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0, 1]",
        "explanation": "Each number is used once."
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ]
  },
  {
    sn: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    category:'Array',
    description: `
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.
    
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
  `,
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807."
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "[0]",
        explanation: ""
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
        explanation: ""
      }
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ]
  },
  {
    sn: 3, 
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category:'String',
    description: `
    Given a string s, find the length of the longest substring without repeating characters.
  `,
    examples: [
      {
        input: "s = \"abcabcbb\"",
        output: "3",
        explanation: "The answer is \"abc\", with the length of 3."
      },
      {
        input: "s = \"bbbbb\"",
        output: "1",
        explanation: "The answer is \"b\", with the length of 1."
      },
      {
        input: "s = \"pwwkew\"",
        output: "3",
        explanation: `
        The answer is \"wke\", with the length of 3.
        Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.
      `
      }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ]
  }
]

export { data }