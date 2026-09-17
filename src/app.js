// Point d'entree de l'application
function calculerTotal(articles) {return articles.reduce((a,b) => a+b.prix, 0);}
