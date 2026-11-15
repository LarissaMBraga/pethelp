
export type AnimalSpecies = "Cachorro" | "Gato" | "Outro";

export type AnimalSize = "Pequeno" | "Médio" | "Grande";

export type Animal = {
  id: string;
  name: string;
  species: AnimalSpecies;
  breed: string;
  age: string;
  size: AnimalSize;
  gender: "Macho" | "Fêmea";
  location: string;
  image: string;
  description: string;
  responsible: string;
};
