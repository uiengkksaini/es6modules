// default import
import sayHi from "./10.Modules.mjs";
sayHi('Shyam')

// simple import
import { printMessage } from "./10.Modules.mjs";
printMessage('Saini','Eligible for US VISA')


// group import
import { html,css } from "./10.Modules.mjs";
console.log(html,css);

// different import
import { J as java,Q as query } from "./10.Modules.mjs";
console.log(java,query);


// import all 
import * as mod from './10.Modules.mjs';
console.log(mod.default('Saini'));

// import syntaxes
// import User from './users';
// import {user,dash} from './dash';
// import * as kk from './users';
// import User, {user as u, dash as d} from './users';
// import User, {user, dash} from './users';
// const const_name= requiure('./pathname');