const request = require("supertest");

jest.mock("axios");

describe("API testing", () => {
  // test if a post request to /articles is successful
  it("POST articles - Incorrect Payload", async () => {
    await request('http://localhost:5000/articles')
      .post("/articles")
      .send({
        title: "test",
        authors: "test",
        journal: "test",
        year: 2001,
        volume: 1,
      })
      .then((response) => {
        expect(response.status).toBe(404);
      });
  });
});