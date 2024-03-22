import { faker } from "@faker-js/faker";

const THRSHOLD = 1000;

export const users = Array.from(Array(THRSHOLD), () => {
  return {
    name: faker.name.fullName(),
    avater: faker.image.avatar(),
  };
});
