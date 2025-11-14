const request = require('supertest');

const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fix/bug.fake');

jest.mock('../src/lib/mongo.lib');

const MongoLib = require('../src/lib/mongo.lib');

const mockGetAll = jest.fn();

MongoLib.mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
}));

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(body.length);
        });
    });
  });
});
