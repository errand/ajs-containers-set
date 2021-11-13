import Team from './Team';
import Bowman from './characters/Bowman';

const team1 = new Team();

const archer = new Bowman('Archer');
const elf = new Bowman('Elf');

team1.add(archer);

console.log(team1);

console.log(team1.toArray());
