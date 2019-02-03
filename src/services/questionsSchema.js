const questionsSchema = {
  questions: [
    {
      id: 11,
      name: 'What would you say to someone who asked about us ?',
      answer: '',
      properties: {
        type: 'text',
        placeholder: 'Please enter your feedback',
        options: [],
      },
    },
    {
      id: 32,
      name: 'Which 3 features are the most valuable to you ?',
      answer: '',
      properties: {
        type: 'dropdown',
        placeholder: '',
        options: [
          {
            name: 'Custom integrations',
            value: 'Custom integrations',
          },
          {
            name: 'Easy navigaton',
            value: 'Easy navigaton',
          },
          {
            name: 'Various types of survey',
            value: 'Various types of survey',
          },
          {
            name: 'Design',
            value: 'Design',
          },
        ],
      },
    },
    {
      id: 42,
      name: 'Which of the following words would you use to describe our product ?',
      answer: '',
      properties: {
        type: 'radioButton',
        placeholder: '',
        options: [
          {
            name: 'Life-saving',
            value: 'Life-saving',
          },
          {
            name: 'Great',
            value: 'Great',
          },
          {
            name: 'Fine',
            value: 'Fine',
          },
          {
            name: 'Buggy',
            value: 'Buggy',
          },
        ],
      },
    },
    {
      id: 21,
      name: 'What problem would you like to solve with our product ?',
      answer: '',
      properties: {
        type: 'text',
        placeholder: 'Please enter your recommendation',
        options: [],
      },
    },
    {
      id: 61,
      name: 'What is your overall feedback ?',
      answer: '',
      properties: {
        type: 'text',
        placeholder: 'Please enter your feedback',
        options: [],
      },
    },
  ],
};

export default questionsSchema;
