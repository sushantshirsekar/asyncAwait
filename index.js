console.log('person1: gets in');
console.log('person2: gets in');



const preMovie = async () => {
    let wifeBringsTics = new Promise((resolve,reject) => {
        setTimeout(() => resolve('tickets'));
    },3000)

    let wifeNeedsPopcorn = new Promise ((resolve,reject) =>  resolve('popcorn'));

    let wifeNeedsButter = new Promise((resolve,reject) => resolve('butter'));

    let wifeNeedsColdDrink = new Promise((resolve,reject) => resolve('coldDrink'));

    let tickets = await wifeBringsTics;
    console.log(`wife: I have ${tickets}`);
    console.log(`husband: let's go in`);
    console.log(`wife: I need popcorn`);

    let popcorn = await wifeNeedsPopcorn;
    console.log(`husband:I got ${popcorn} let's go`);
    console.log(`wife: I need butter on my popcorn`);

    let butter = await wifeNeedsButter;
    console.log(`husband: I got ${butter} too`);
    console.log(`wife: I need cold drink`);



    let coldDrink = await wifeNeedsColdDrink;
    console.log(`husband: I got ${coldDrink} too `);
    console.log(`wife: let's go in we are getting late`);
    console.log(`husband: *sarcastically* woww`);

    return tickets;
}

console.log('person4: gets in');
console.log('person5: gets in');


preMovie().then((c)=> console.log(`person3: with ${c} gets in`));


