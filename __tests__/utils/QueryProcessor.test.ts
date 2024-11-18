import QueryProcessor from "../../utils/QueryProcessor";
import "@testing-library/jest-dom";

describe("QueryProcessor", () => {
  test("should return a string", () => {
    const query = "test";
    const response: string = QueryProcessor(query);
    expect(typeof response).toBe("string");
  });

  test("should return shakespeare description", () => {
    const query = "shakespeare";
    const response: string = QueryProcessor(query);
    expect(response).toBe(
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
        "English poet, playwright, and actor, widely regarded as the greatest " +
        "writer in the English language and the world's pre-eminent dramatist."
    );
  });

  test("should return my USB ID", () => {
    const query = "what's your USB ID?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("1410423");
  });

  test("should return my USB ID", () => {
    const query = "what's your name?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("César González");
  });

  test("should return Peter Parker", () => {
    const query = "who is Spiderman?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("Peter Parker");
  });

  test("should return Cristiano Ronaldo, SIUUUU", () => {
    const query = "¿Quién es el bicho?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("Cristiano Ronaldo, SIUUUU");
  });

  test("should return the sum of two numbers", () => {
    const query = "What is 7 plus 77?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("84");
  });

  test("should return the largest number", () => {
    const query = "Which of the following numbers is the largest: 7, 43, 64?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("64");
  });
});
