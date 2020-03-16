import Character from '../app';

test('успешное создание персоонажа', () => {
  const recieved = new Character('Peter', 'Undead');
  const expected = {
    name: 'Peter',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(recieved).toEqual(expected);
});

test('Имя не является строкой', () => {
  expect(() => new Character(7, 'Daemon')).toThrow();
});

test('Введенное имя слишком короткое имя', () => {
  expect(() => new Character('P', 'Undead')).toThrow();
});

test('Слишком длинное имя', () => {
  expect(() => new Character('Власов Петр Геннадьевич', 'Undead')).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('Неверный тип персонажа', () => {
  expect(() => new Character('Peter', 'Human')).toThrow();
});
