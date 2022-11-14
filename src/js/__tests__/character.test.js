import Character from '../Character';
import Bowman from '../Characters/Bowman';
import Swordsman from '../Characters/Swordsman';

test('Char erorr', () => {
  expect(() => new Character(1, 'bowman')).toThrowError(
    new Error('Class not available')
  );
});

test('erorrs on create', () => {
  expect(() => new Bowman(1, 'bowman')).not.toThrowError();
});


test('create Swordman', () => {
  expect(new Swordsman(1, 'swordsman')).toEqual({
    level: 1,
    attack: 40,
    defence: 10,
    health: 50,
    type: 'swordsman',
    distance: 4,
    attackRange: 1,
    class: "Мечник"
  });
});