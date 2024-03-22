import { faker } from "@faker-js/faker";

const THERSHOLD = 10000;

export const animals = Array.from(Array(THERSHOLD), () => {
  return {
    id: faker.random.alphaNumeric(5),
    name: faker.animal.bear(),
  };
});
