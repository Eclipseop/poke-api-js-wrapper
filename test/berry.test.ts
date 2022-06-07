import { berry } from "../src";

test('Ensure successful parsing berry with name', async () => {
  const cheri = await berry.getBerry('cheri');
  expect(cheri.name).toBe('cheri');
  expect(cheri.flavors.length).toBe(5);
});
  
test('Ensure successful parsing berry with id', async () => {
  const cheri = await berry.getBerry(1);
  expect(cheri.name).toBe('cheri');
  expect(cheri.flavors.length).toBe(5);
});

test('Ensure successful parsing firmness with name', async () => {
  const firmness = await berry.getFirmness('very-soft');
  expect(firmness.name).toBe('very-soft');
});
  
test('Ensure successful parsing firmness with id', async () => {
  const firmness = await berry.getFirmness(1);
  expect(firmness.name).toBe('very-soft');
});

test('Ensure successful parsing flavor with name', async () => {
  const flavor = await berry.getFlavor('spicy');
  expect(flavor.name).toBe('spicy');
});
  
test('Ensure successful parsing flavor with id', async () => {
  const flavor = await berry.getFlavor(1);
  expect(flavor.name).toBe('spicy');
});