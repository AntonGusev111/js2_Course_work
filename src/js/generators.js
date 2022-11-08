import Bowman from './characters/Bowman'
import Daemon from './characters/Daemon'
import Magician from './characters/Magician'
import Swordsman from './characters/Swordsman'
import Undead from './characters/Undead'
import Vampire from './characters/Vampire'

/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  let level = Math.floor(Math.random() * (Math.floor(maxLevel) - 1 + 1)) + min;
  let character = Math.floor(Math.random() * allowedTypes.length);
  yield new character(level)
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const character = characterGenerator(allowedTypes, maxLevel);

  for (let i = 0; i < characterCount; i += 1) {
    team.push(character.next().value);
  }

  return team;
}
