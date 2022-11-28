console.log('perosn1: gets in');
console.log('person2: gets in');

const wifeBringsTics = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('tickets');
    },3000)
});

const wifeNeedsPopcorn = wifeBringsTics.then((c)=> {
    console.log(`husband: we have ${c} we should go in`);
    console.log(`wife: I need popcorn`);
    return new Promise ((resolve,reject) => {
        resolve('popcorn');
    }) 
})

const wifeNeedsButter = wifeNeedsPopcorn.then((p)=>{
    console.log(`husband: I got ${p}`);
    console.log(`wife: I need butter on my ${p}`);
    return new Promise((resolve,reject) => resolve('butter'));
})

const wifeNeedsColdDrink = wifeNeedsButter.then((b)=>{
    console.log(`husband: I got ${b}`);
    console.log(`wife: I need colddrink`);
    return new Promise((resolve,reject) => resolve('coldDrink'));
})

wifeNeedsColdDrink.then((cd)=> {
    console.log(cd);
    console.log('person3: gets in');
})

console.log('person4: gets in');
console.log('person5: gets in');
