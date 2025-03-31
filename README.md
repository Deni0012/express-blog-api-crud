### Milestone 1
- Creiamo un controller per i nostri post, in una cartella controllers.
- All’interno, prepariamo tutte le funzioni necessarie 
- Importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte.
- Testiamo su postman 


### Milestone 2 
- Creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts.
- Ora passiamo ad implementare le logiche delle nostre CRUD:
  - Index dovrà restituire la lista dei post in formato JSON
  - Show dovrà restituire un singolo post in formato JSON
  - Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.


### Bonus 
- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.