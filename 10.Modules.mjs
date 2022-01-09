// export default
export default function sayHi(name) {
    console.log(`Hello ${name}`);
}

// simple export
export function printMessage(name, msg) {
    console.log(`Hello ${name}, Message:- ${msg}`);
}

// group export
export let html = 'HyperText Markup Language', css = 'Cascading Style Sheet';


// different syntax
let js = 'javascript', jq = 200;
export { js as J, jq as Q }


// export syntaxes
// export default function sayHi(){alert('hello')}
// export let name='kishan',age=20,msg='Be Careful';
// export {name as n, age as a, msg as m}
// module.exports={var1, func, class2}