 Per questa seconda fase del lavoro, abbiamo utilizzato un secondo dataset composto dai quiz ministeriali, relativi alla prova preselettiva per accedere alla carriera prefettizia. I quiz trattano di diritto amministrativo, penale e civile e prevedono domande con risposte a scelta multipla (4 opzioni, di cui conoscevamo la risposta esatta). Si suddividono in 3 livelli di difficoltà: facile, medio, difficile. Oltre ai quiz, abbiamo reperito, poi, i codici legali e procedurali dei diversi ambiti del diritto. Come primo passo abbiamo testato le performance sui quiz di quattro LLM (Dante-7b, Mistral-7b, Anita-8b, ChatGPT-175b). 
 {:.giustificato}


Abbiamo, poi, somministrato nuovamente i quiz agli LLM in questione ma utilizzando il RAG (Retrieval-Augmented Generation), una tecnica avanzata di Natural Language Processing (NLP) che migliora le performance di un LLM recuperando, tramite un motore di ricerca, le informazioni utili al modello stesso per formulare risposte pertinenti, aiutandolo a superare i limiti della generazione statistica di testo. Questo è particolarmente utile in contesti complessi (anche dal punto di vista linguistico) e in continua evoluzione, come la legge italiana. 
{:.giustificato}

Per implementare il RAG, abbiamo utilizzato Weaviate, un motore di ricerca vettoriale basato sull’AI che permette ricerche semantiche avanzate su dati non strutturati. Weaviate permette inoltre di regolare il tipo di ricerca e recupero di documenti tramite un iperparametro **alpha**. Tale iperparametro regola la modalità di ricerca, che può essere vettoriale e per keyword, permettendo di ottimizzare i risultati in base alle esigenze specifiche: in particolare, un alpha vicino allo 0.0 pone maggiore enfasi sulla ricerca per keyword, mentre un alpha vicino a 1.0 effettua una ricerca di tipo semantico-vettoriale.
{:.giustificato}


**Procedura del test**:
Per somministrare i testi agli LLM gli step sono stati i seguenti: 
1. Utilizzare il testo del quesito come query in Weaviate per recuperare i documenti più rilevanti;
2. creare il prompt includendo il testo del quesito, le opzioni di risposta e i documenti recuperati dal RAG e chiedendo all’LLM di basare la risposta proprio su tali documenti;
3. estrarre la risposta scelta dall’LLM e confrontarla con la risposta corretta.
{:.giustificato}

Abbiamo eseguito il test per i quattro LLM con diversi valori di alpha (0.0, 0.25, 0.5, 0.75, 1.0). Inoltre, abbiamo adottato una strategia di ensembling dei modelli con meno parametri e potenzialmente eseguibili in locale da un utente qualsiasi (Dante, Mistral, Anita), prendendo come risposta finale quella maggioritaria. 
{:.giustificato}

 <vegachart schema-url="{{site.baseurl}}/assets/charts/finale.json" 
        style="width: 80%; height: 80%; max-width: 1000px; max-height: 800px;"></vegachart>

Il grafico mostra i risultati ottenuti nei test ministeriali dai vari modelli e dall’ensembling, al variare di alpha. Come si può notare, nell’ambito del diritto civile e costituzionale, le performance con RAG (barra di colore più chiaro) superano anche del 20% quelle dei modelli senza RAG (barra di colore più scuro). Questo perché il RAG consente a Weaviate di recuperare documenti altamente pertinenti e di conseguenza le risposte dell’LLM sono più accurate. Per quanto riguarda il parametro alpha, le performance migliori sono state ottenute con un valore di alpha pari a 0.5, che rappresenta il perfetto bilanciamento tra la ricerca vettoriale e quella per keyword.
{:.giustificato}

Una riflessione a parte merita il caso del diritto amministrativo. Come si può notare, è l’ambito in cui la presenza o meno del RAG non influisce in modo significativo sulle performance del modello. Questo perché i test ministeriali di tale materia erano basati, per lo più, sui decreti-legge. Questi ultimi, però, non erano stati inseriti nel dataset, insieme ai vari codici legali e di procedura poiché non è stato possibile reperirli. Di conseguenza, i documenti che il RAG recupera e sottopone all’LLM fuorvianti e fuori contesto. Questo non è un problema intrinseco del motore di ricerca, ma deriva dalla mancanza di documenti specifici e pertinenti per questo task. Pertanto, per un corretto funzionamento del RAG è essenziale che il dataset comprenda documenti effettivamente rilevanti per quel task specifico. 
{:.giustificato}