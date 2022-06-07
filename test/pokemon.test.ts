import { pokemon } from "../src";

test('Ensure successful parsing with name', async () => {
  const ditto = await pokemon.getPokemon('ditto');
  expect(ditto.name).toBe('ditto');
  expect(ditto.abilities.length).toBe(2);
});

test('Ensure successful parsing with id', async () => {
  const ditto = await pokemon.getPokemon(132);
  expect(ditto.name).toBe('ditto');
  expect(ditto.abilities.length).toBe(2);
});

test('Ensure cache works', async () => {
  const times = [];
  for (let i = 0; i < 10; i++) {
    const start = process.hrtime()[1];
    await pokemon.getPokemon(132);
    times.push(process.hrtime()[1] - start);
  }
  const pullTime = times[0];
  times.splice(1).every((i) => expect(i).toBeLessThan(pullTime));
});