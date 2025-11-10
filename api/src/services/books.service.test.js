const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: '1',
    title: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => [],
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });

    test('Should return a name book', async () => {
      const books = await service.getBooks({});
      expect(books[0].title).toEqual('Harry Potter');
    });
  });
});
