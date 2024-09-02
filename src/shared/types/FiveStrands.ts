export type AllergyLevel = 1 | 2 | 3;

export type FiveStrandIntolerance = {
  level: AllergyLevel;
  type: string;
  name: string;
};
