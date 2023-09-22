export const interview = [
    // {
    // title:"First test",
    // stream: ["DSA", "CP"],
    // tags: ["binary search", "DP", "Google"],
    // duration: 3600,
    // amount:49,
    // enrolledStudents:["bd789eo", "ged27nucm", "yeby7y38"],
    // creator:"begf78723h",
    // rating:3.8,
    // questions:["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
    // },
    {
        "title": "Second test",
        "stream": ["Algorithms", "Machine Learning"],
        "tags": ["linear regression", "logistic regression", "gradient descent"],
        "duration": 2400,
        "amount": 39,
        "enrolledStudents": ["edf789eo", "ged27nucm", "yeby7y38"],
        "creator": "begf78723h",
        "rating": 4.2,
        "questions": ["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
      },
      
      {
        "title": "Third test",
        "stream": ["Data Structures", "Operating Systems"],
        "tags": ["linked lists", "stacks", "queues"],
        "duration": 1800,
        "amount": 29,
        "enrolledStudents": ["bd789eo", "ged27nucm", "yeby7y38"],
        "creator": "begf78723h",
        "rating": 3.5,
        "questions": ["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
      },
      
      {
        "title": "Fourth test",
        "stream": ["Web Development", "Front-End Development"],
        "tags": ["HTML", "CSS", "JavaScript"],
        "duration": 1200,
        "amount": 19,
        "enrolledStudents": ["edf789eo", "ged27nucm", "yeby7y38"],
        "creator": "begf78723h",
        "rating": 4.0,
        "questions": ["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
      },
      
      {
        "title": "Fifth test",
        "stream": ["Back-End Development", "Python", "Django"],
        "tags": ["Flask", "SQL", "REST APIs"],
        "duration": 1800,
        "amount": 29,
        "enrolledStudents": ["bd789eo", "ged27nucm", "yeby7y38"],
        "creator": "begf78723h",
        "rating": 3.5,
        "questions": ["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
      },
      
      {
        "title": "Sixth test",
        "stream": ["Machine Learning", "Deep Learning"],
        "tags": ["neural networks", "convolutional neural networks", "recurrent neural networks"],
        "duration": 3600,
        "amount": 49,
        "enrolledStudents": ["edf789eo", "ged27nucm", "yeby7y38"],
        "creator": "begf78723h",
        "rating": 4.2,
        "questions": ["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
      },
      
      {
        "title": "Seventh test",
        "stream": ["Data Science", "Natural Language Processing"],
        "tags": ["sentiment analysis", "machine translation", "question answering"],
        "duration": 2400,
        "amount": 39,
        "enrolledStudents": ["bd789eo", "ged27nucm", "yeby7y38"],
        "creator": "begf78723h",
        "rating": 3.5,
        "questions": ["bc3899fer", "bwedehcod9", "bwd72e89dno", "webude9389d"]
      }
];

export const question = [
  {
    questionNumber:1,
    question:{
      questionAsked:"What is the value of pi",
      options:["3.14", "4.14", "5.16", "3.32"]
    },
    type:"singleChoice",
    duration:120,
    answer:{
      value:"3.14"
    },
    hint:["PI is 3.14"],
    images:[],
    level:"easy",
    tags:["mathematics", "geometry"]
  },
  {
    questionNumber: 2,
    question: {
      questionAsked: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"]
    },
    type: "singleChoice",
    duration: 120,
    answer: {
      value: "Paris"
    },
    hint: ["The capital of France is Paris."],
    images: [],
    level: "easy",
    tags: ["geography", "capitals"]
  },
  {
    questionNumber: 3,
    question: {
      questionAsked: "What is the name of the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"]
    },
    type: "singleChoice",
    duration: 120,
    answer: {
      value: "Mount Everest"
    },
    hint: ["Mount Everest is the tallest mountain in the world."],
    images: [],
    level: "easy",
    tags: ["geography", "mountains"]
  },
  {
    questionNumber: 4,
    question: {
      questionAsked: "What is the name of the largest ocean in the world?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    },
    type: "singleChoice",
    duration: 120,
    answer: {
      value: "Pacific Ocean"
    },
    hint: ["The Pacific Ocean is the largest ocean in the world."],
    images: [],
    level: "hard",
    tags: ["geography", "oceans"]
  },
  {
    questionNumber: 5,
    question: {
      questionAsked: "What is the name of the planet closest to the sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"]
    },
    type: "singleChoice",
    duration: 120,
    answer: {
      value: "Mercury"
    },
    hint: ["Mercury is the planet closest to the sun."],
    images: [],
    level: "medium",
    tags: ["space", "planets"]
  }
];

export const q2 = [
  {
    "questionNumber": 1,
    "question": {
      "questionAsked": "What is the time complexity of inserting an element at the end of an array?"
    },
    "type": "video",
    "duration": 120,
    "answer": {
      "value": "O(1)"
    },
    "hint": ["Inserting an element at the end of an array has constant time complexity."],
    "images": [],
    "level": "easy",
    "tags": ["data structures", "algorithms"],
    "score": 0
  },
  {
    "questionNumber": 2,
    "question": {
      "questionAsked": "What is a binary search tree?"
    },
    "type": "video",
    "duration": 120,
    "answer": {
      "value": "A binary tree in which each node has at most two children, and values are ordered."
    },
    "hint": ["A binary search tree is a specific type of binary tree with ordering properties."],
    "images": [],
    "level": "easy",
    "tags": ["data structures", "algorithms"],
    "score": 0
  },
  {
    "questionNumber": 3,
    "question": {
      "questionAsked": "Explain the concept of Big O notation."
    },
    "type": "video",
    "duration": 120,
    "answer": {
      "value": "Big O notation is used to describe the upper bound of an algorithm's time complexity."
    },
    "hint": ["Big O notation provides an asymptotic analysis of algorithm efficiency."],
    "images": [],
    "level": "medium",
    "tags": ["data structures", "algorithms"],
    "score": 0
  },
  {
    "questionNumber": 4,
    "question": {
      "questionAsked": "What is a hash table?"
    },
    "type": "video",
    "duration": 120,
    "answer": {
      "value": "A data structure that stores key-value pairs and provides fast lookup."
    },
    "hint": ["Hash tables use a hash function to map keys to indices for efficient retrieval."],
    "images": [],
    "level": "medium",
    "tags": ["data structures", "algorithms"],
    "score": 0
  },
  {
    "questionNumber": 5,
    "question": {
      "questionAsked": "What is the purpose of dynamic programming?"
    },
    "type": "video",
    "duration": 120,
    "answer": {
      "value": "Dynamic programming is used to solve problems by breaking them into smaller subproblems."
    },
    "hint": ["Dynamic programming helps avoid redundant calculations in recursive algorithms."],
    "images": [],
    "level": "hard",
    "tags": ["data structures", "algorithms"],
    "score": 0
  }
];
