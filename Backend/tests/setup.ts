process.env.NODE_ENV = 'test';
process.env.PORT = '880'; // Random port
// process.env.OPEN_API_KEY = 'randomopenapikey'


// Suppress console logs during tests
jest.spyOn(console, 'log').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});
jest.spyOn(console, 'warn').mockImplementation(() => {});