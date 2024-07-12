import { loremIpsum } from "lorem-ipsum";
import { faker } from "@faker-js/faker";

export const generateList = ({ rowCount }: { rowCount: number }) =>
  Array.from({ length: rowCount }, (_: unknown, i: number) => ({
    id: i + 1,
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    image: faker.image.avatar(),
    text: loremIpsum({
      count: 1,
      units: "sentences",
      sentenceLowerBound: 30,
      sentenceUpperBound: 150,
    }),
  }));
