
// get API -> async
// menampilkan data dari API
// Backend & Frontend
// Backend => API => Frontend
// api => RestAPI, Rest, Soap, GraphQL, WebSocket

// RestApi = RESTful API

// const fetch = require("node-fetch");
const users = [];
const getPost = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
            json.forEach(element => {
                users.push(element);
            });
        });
};
const fakeArray = [
    {
        id: 1000,
        name: 'Yoga Hermawan',
        username: 'yoga.hermawan',
        email: 'yogahermawan@gmail.com',
    }
];

const handleFetch = async () => {
    await getPost();
    console.log(users);

    //Destructuring
    let { title, body } = users[0];
    // Spread/ Rest Operator
    let newArray = [...fakeArray, users.map(user => ({ ...user }))];
    console.log(newArray);
};
handleFetch();

return false;

Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"), // get api chart
    fetch("https://jsonplaceholder.typicode.com/users"), //get api profil user
    fetch("https://jsonplaceholder.typicode.com/comments") // get api product
]).then(responses => {
    responses[2].json().then(json => {
        json.forEach(element => {
            console.log(element);
            // console.log("User ID: " + element.userId);
            // console.log("Title: " + element.title);
            // console.log("Body: " + element.body);
        });
    });
    return false;
    responses.forEach(response => {
        response.json().then(json => {
            json.forEach(element => {
                console.log(element);
                // console.log("User ID: " + element.userId);
                // console.log("Title: " + element.title);
                // console.log("Body: " + element.body);
            });
        });
    })
});