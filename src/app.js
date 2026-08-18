function greet(name) {

    return `Hello, ${name}!`

}

module.exports = greet;
// If run directly, print a greeting
if (require.main === module) {

    console.log(greet("World"));

}