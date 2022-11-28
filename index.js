// console.log('person1: gets in');
// console.log('person2: gets in');



// const preMovie = async () => {
//     let wifeBringsTics = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('tickets'));
//     },3000)

//     let wifeNeedsPopcorn = new Promise ((resolve,reject) =>  resolve('popcorn'));

//     let wifeNeedsButter = new Promise((resolve,reject) => resolve('butter'));

//     let wifeNeedsColdDrink = new Promise((resolve,reject) => resolve('coldDrink'));

//     let tickets = await wifeBringsTics;
//     console.log(`wife: I have ${tickets}`);
//     console.log(`husband: let's go in`);
//     console.log(`wife: I need popcorn`);

//     let popcorn = await wifeNeedsPopcorn;
//     console.log(`husband:I got ${popcorn} let's go`);
//     console.log(`wife: I need butter on my popcorn`);

//     let butter = await wifeNeedsButter;
//     console.log(`husband: I got ${butter} too`);
//     console.log(`wife: I need cold drink`);



//     let coldDrink = await wifeNeedsColdDrink;
//     console.log(`husband: I got ${coldDrink} too `);
//     console.log(`wife: let's go in we are getting late`);
//     console.log(`husband: *sarcastically* woww`);

//     return tickets;
// }

// console.log('person4: gets in');
// console.log('person5: gets in');


// preMovie().then((c)=> console.log(`person3: with ${c} gets in`));


// posts assignment



const Posts = async () => {
    const posts = [

        { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    
        { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
    
    ];
    function createPost (post)  {
        new Promise((resolve, reject) => {

        const err = false;
        if (!err) {
            resolve();
        }
        else {
            reject('Err0r: Something went wrong');
        }
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
        }, 1000);
    }) 
    }
    let intervalID = 0;





function getPosts() {

    clearInterval(intervalID);

    intervalId = setInterval(() => {

        let output = '';

        for (let i = 0; i < posts.length; i++) {

            output = output + `<li id=post${i}> ${posts[i].title} created ${(new Date().getTime() - posts[i].createdAt) / 1000} seconds ago</li> `

        }

        document.getElementById('parent').innerHTML = output;

    }, 1000);
}


function deletePost() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop());
            }
            else {
                reject('Error: Array is empty');
            }
        }, 1000)
    })
}



    


    let post = await createPost({title: 'post3', body:'body3'});
    let getPost = await getPosts();
    let deletepost = await deletePost();
    let deletepost1 = await deletePost();
    let deletepost2 = await deletePost();
    let deletepost3 = await deletePost();
    let deletepost4 = await deletePost();

    return posts;
}

Posts().then();


