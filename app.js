// const name = 'Venkatesh';
// console.log(name);
module.exports = {
    a:10,
    b:115, 
    c:function(name){
        return `hello,${name}`;
    }
    
}
const greet = (name) => {
    console.log(`hello,${name}`);
}

greet('Venkatesh');