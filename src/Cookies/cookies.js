// npm install universal-cookie

import Cookies from 'universal-cookie';
export const cookies = new Cookies();
cookies.set('myCat', ['Pacman','Gaurav']);
console.log(cookies.get('myCat')); // Pacman

