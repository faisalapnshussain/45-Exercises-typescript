//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message:string){
    console.log(`I'm making a ${size} T.shirts wirh the message "${message}"`)
}
make_shirt("Small", "This is your size!");
make_shirt("Medium", "This is your size!");
make_shirt("Large", "This is your size!");