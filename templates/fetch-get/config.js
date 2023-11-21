config = {
  name: "Fetch Request (GET)",
  description: "Perform a GET request to the provided url",
  author: "Marko",
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1700605173597.jpg',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'URL',
          variable: 'url',
          helpText: 'Full URL of your GET request.',
          type: 'text',
        },
        {
          label: 'Authorization',
          variable: 'authorization',
          helpText: 'Authorization to include in the header. Usually an API key.',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to assign the output to.',
          type: 'text',
        },
      ],
    },
  ],
}