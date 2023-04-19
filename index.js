let recipes= [
    {
        name: "Pizza", ingredients: ["cheese", "pepperoni", "mushrooms", "olives"],
    },
    {
        name: "Lasagne", ingredients: ["spinach", "tomatoes", "onions", "carrots"],
        
    },
    {
        name: "Pasta", ingredients: ["spinach", "tomatoes", "onions", "carrots"],
    },
    {
        name: "Buritto", ingredients: ["spinach", "tomatoes", "onions", "carrots"],

    },
    {
        name: "Burgers", ingredients: ["spinach", "tomatoes", "onions", "carrots"],
    }
];


let search = () => {

    
let searchBar = document.getElementById("searchBar").value.toUpperCase();
let recipesList = document.getElementById("recipesList");
let recipes = document.querySelectorAll(".recipe");
let rname = <document.getElementById("h2");

