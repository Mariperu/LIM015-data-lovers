import {
  //example,
  search,
  numericalOrder,
  alphabeticalOrder,
  typeFilter
} from '../src/data.js';

//Importando BASE DE DATOS
import data from '../src/data/pokemon/pokemon.js';

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
*/
describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });
  /*
    it('search number or name writting', () => {
      expect(search(data.pokemon, "pikachu")).toBe(data.pokemon[24]);
    });
    */
});

describe('numericalOrder', () => {
  it('is a function', () => {
    expect(typeof numericalOrder).toBe('function');
  });

  it('sort by lower number', () => {
    //(selectOrder, dataNumber)
    numericalOrder("lowerNumber", data.pokemon);
    //al ordenar [0] es primero por default: 001
    expect(data.pokemon[0].num).toBe('001');
  });

  it('sort by top number', () => {
    //(selectOrder, dataNumber)
    numericalOrder("topNumber", data.pokemon);
    //al ordenar [0] cambia por el último: 251
    expect(data.pokemon[0].num).toBe('251');
  });
});

describe('alphabeticalOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticalOrder).toBe('function');
  });

  it('sort by `az`', () => {
    //(selectOrder, dataName)
    alphabeticalOrder("az", data.pokemon);
    //al ordenar [0] cambia por primero de letra A
    expect(data.pokemon[0].name).toBe('abra');
  });

  it('sort by `za`', () => {
    //(selectOrder, dataName)
    alphabeticalOrder("za", data.pokemon);
    //al ordenar [0] cambia por primero de letra Z
    expect(data.pokemon[0].name).toBe('zubat');
  });
});

describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });
  /*
    it('filter by type chosen', () => {
      //(selectorType, dataType)
      typeFilter("grass", data.pokemon);
      expect(data.pokemon[0].type).toBe('grass');
    });
    */
});
