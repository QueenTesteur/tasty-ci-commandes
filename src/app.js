// Point d'entree de l'application
function calculerTotal(articles) {return articles.reduce((a,b) => a+b.prix, 0);}
//TODO: gerer les remises
function listerCommandes(commandes){ return commandes.map(c => c.id);}
function exporterCSV(commandes){ /* a completer */ }
 // Debut d'une nouvelle fonctionnalité, pas encore terminée
