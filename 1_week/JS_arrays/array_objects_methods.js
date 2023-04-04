//By M. Sandoval

//filter - map - find - foreach - sum 

// Define an array of objects representing articles, each with a name and a price
const article = [
    {articleName: 'book', price: 30},
    {articleName: 'tv', price: 1400},
    {articleName: 'phone', price: 800},
    {articleName: 'notebook', price: 10}
]

// Filter: Filter the articles to find only those with a price less than or equal to 100
const filteredArticles = article.filter(function(article){
    return article.price <=100
});

console.log(filteredArticles)

//Map: Map the articles to create an array of article names
const mapedArticles = article.map(function(article){
    return article.articleName
});

console.log(mapedArticles)

//Find: Find the article with the name "tv"
const findArticles = article.find(function(article){
    return article.articleName === 'tv'
});

console.log(findArticles)

//For Each: Use forEach() to loop through each article in the array
article.forEach(function(article){
    console.log(article.articleName)
});


//Sum (returns true or false) to determine if any articles have a price less than or equal to 800
const cheapArticle = article.some(function(article){
    return article.price <= 800;
});

console.log(cheapArticle)