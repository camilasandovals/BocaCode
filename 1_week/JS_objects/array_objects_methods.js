//By M. Sandoval

const article = [
    {articleName: 'book', price: 30},
    {articleName: 'tv', price: 1400},
    {articleName: 'phone', price: 800},
    {articleName: 'notebook', price: 10}
]

// Filter
const filteredArticles = article.filter(function(article){
    return article.price <=100
});

console.log(filteredArticles)

//Map
const mapedArticles = article.map(function(article){
    return article.articleName
});

console.log(mapedArticles)

//Find
const findArticles = article.find(function(article){
    return article.articleName === 'tv'
});

console.log(findArticles)

//For Each
const forEachArticle = article.forEach(function(article){
    return article.articleName
});
console.log(forEachArticle)


//Sum (returns true or false)
const cheapArticle = article.some(function(article){
    return article.price <= 800;
});

console.log(cheapArticle)