
# Anita Va a scuola..


Dopo gli ottimi risultati del RAG e dopo la consapevolezza del limiti dello strumento abbimo iniziato il notstro fine tuning con il set di Question and Answer più richiesti dagli italiani.

Quando si tratta di legge però, il linguaggio tecnico ci impedisce di risolvere i nostri dubbi, ma ecco che arriva AVVOCHAT, un modello linguistico, facile da utilizzare, addestrato a rispondere a domande riguardanti le leggi italiane. Specializzato su un dominio di conoscenza giuridica, il nostro primo dataset, Avvochat si avvale della RAG per avvalorare la sua risposta, arricchendola con le informazioni recuperate da un secondo dataset, ottenuto a partire dai codici di legge



Per fare questo abbiamo utilizzato le macchine del centro di calcolo del CNR. Una delle difficoltà principali di creare questi tipo di modelli sono la necessità di avere hardware molto potenti..

Un ulteriore sviluppo del progetto ha previsto il fine tuning di questo modello per rendere le risposte generate il più possibile discorsive e comprensibili ai non addetti ai lavori.  Il risultato è stato un modello addestrato nuovamente ma questa volta sul dataset iniziale di domande e risposte con i dubbi legali delle persone comuni.


![Test immagine]({{site.baseurl}}/assets/images/avvochat.jpeg)


{% capture llm_tech %}
{% include_relative snippets/tech/llm_tech.md %}
{% endcapture %}

{% include tech-content.html content=llm_tech %}

Il diritto è una questione che ci coinvolge tutti. Direttamente, da vicino, nella nostra quotidianità anche se non siamo coinvolti in processi civili o penali, crea e regola i nostri spazi di libertà e le regolamenta il nostro regime democratico, la nostra economia, la nostra occupazione. Come il codice definisce il comportamento di un software, così il diritto regolamenta le nostre pratiche il nostro potere, la nostra libertà. In Italia, anche se i processi sono in diminuzione, ogni anno tra processi civili e penali circa cinque milioni di italiani sono coinvolti in procedimenti giudiziari. Il diritto è un codice complesso, fatto Il diritto è una questione che ci coinvolge tutti. Direttamente, da vicino, nella nostra quotidianità anche se non siamo coinvolti in processi civili o penali, crea e regola i nostri spazi di libertà e le regolamenta il nostro regime democratico, la nostra economia, la nostra occupazione. Come il codice definisce il comportamento di un software, così il diritto regolamenta le nostre pratiche il nostro potere, la nostra libertà. In Italia, anche se i processi sono in diminuzione,







## Validazione e chiusura intervista


Per verificare quale tra i modelli utilizzati avesse prestazioni migliori in termini di affidabilità e trasparenza abbiamo confrontato i tre modelli ponendogli una serie di domande e confrontando le risposte. 
Secondo 10 avvocati di varia provenienza, età e specializzazione Avvochat è sicuramente il modello preferibile in quanto non solo offre un sistema integrato che specifica le norme richiamate e attinge da fonti diverse, è anche veloce,  consolidato per ricerche e risposte in linguaggio semplice e discorsivo e garantisce la privacy che i forum e i social non possono garantire


![Test immagine]({{site.baseurl}}/assets/images/avvochat2.png)



Conclusioni: dato l’enorme corpus legislativo, le persone non possono conoscere ogni regola che determina il vivere civile, tutti prima o poi hanno dei dubbi e si chiedono piccole cose o curiosità. Abbiamo costruito un LLM in grado di rispondere perché grazie al rag pesca le risposte nel mare dei codici e delle leggi e poi restituisce una risposta chiara e sintentica riportando però le fonti.
In grado di competere anche con i modelli più potenti e di ultima generazione, Avvochat, si distingue per affidabilità e trasparenza. E alle risposte dei nostri colleghi risponde con punteggio superiore rispetto a chat e mistral.

INTERVISTA A AVVOCATO MARTORANA 

Appunti di Roberta all’ Intervista Marco Martorana
La legge vede dei problemi dei pericoli e regola – GDPR, AI act: andiamo a regolare le attività ad alto rischio dell’AI..in italia ci sono pochissime aziende che puntano sull’investimento in questo nuovo ambito; il rischio precede addirittura l’applicazione…di cosa stiamo parlando ,se ancora non abbiamo tool adeguati? Siamo venuti a  conoscenza del fenomeno grazie allo scandalo di open-AI, poca chiarezza sull’uso dei dati…all’inizio era difficile l’accesso; chat-GPT ha rivoluzionato questo approccio…facilità nell’uso del linguaggio,,,ci si adegua alla digitalizzazione del mondo; evoluzione- la macchina risponde, non c’è più una netta distinzione tra umano/automa.
Primo rischio: pilota-automatico: se c’è un incidente grave, chi ne risponde? La macchina non ragiona-ostacolo indefinito--- errori gravi di questo tipo, portano la legge ad avere una reazione molto forte; obiettivo a livello di regolamentazione: l’EU vuole regolamentare tutto (giuspositivisti); obiettivo vero: creare un clima di fiducia- so che c’è una norma che mi tutela: Il rischio gestito fa sì che la gente si senta protetto nel rilasciare i dati; side-effect: sviluppano altrove
In Italia l’elemento che c’è ancora- ci porterà via il lavoro- di solito quando si esprimono in questo modo è perché non l’hanno mai provata: ce ne sarà un uso sempre più massiccio- di solito ci si supporta con gli Llm; saperlo usare è un passaggio ulteriore- l’avvocato base, non si avvale dell’informatica ed è un problema



