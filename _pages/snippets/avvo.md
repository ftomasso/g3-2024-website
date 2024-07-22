
# COME NASCE AVVOCHAT?


Per la creazione del modello siamo partiti con l’istruire un LLM già esistente (ANITA, modello sviluppato dall’Università di Bari) su un dataset composto dai 66.000 articoli a cui abbiamo già fatto riferimento e che, lo ricordiamo, sono scritti in un linguaggio colloquiale e non specialisti e, quindi, risultano facilmente comprensibili anche per chi non ha competenze legali. Abbiamo svolto, dunque, quella che viene definita un’operazione di fine-tuning. Siamo passati, poi, a una seconda fase di test, in cui abbiamo sottoposto all’AvvoChat e ad altri tre LLM (Mistral, Anita , e Chat-GPT4) alcune domande a tema legale. Abbiamo chiesto, poi, ad un pull di avvocati di diversa provenienza, età e specializzazione, quale fosse la risposta più performante a livello di pertinenza, esattezza dell’ informazione, livello di sintesi e semplicità interpretativa.
{:.giustificato}




{% capture llm_tech %}
{% include_relative snippets/tech/llm_tech.md %}
{% endcapture %}

{% include tech-content.html content=llm_tech %}



## COME SE L’È CAVATA L’AVVOCHAT?

Tutto sommato, l’AvvoChat, non se l’è cavata male. Ha ricevuto, infatti, pareri positivi per quanto riguarda la pertinenza della risposta. Buone anche l’esattezza e la sintesi, mentre la performance cala per quanto riguarda la semplicità del testo generato. Naturalmente, ça va sans dire, i risultati migliori sono stati quelli ottenuti con ChatGPT4. Tuttavia, le risposte dell’AvvoChat sembrano essere più convincenti, per gli avvocati, rispetto a quelle di Anita. questo è, comunque, un risultato degno di nota ed è la prova del fatto che, partendo da un LLM relativamente leggero e maneggevole (Anita ha “solo” 8 miliardi di parametri) e perfezionandolo con il RAG e un fine-tuning mirato, le performance ottenute possono essere un buon punto di partenza per eventuali sviluppi futuri. Insomma, se  Insomma, come direbbe Neil Armstrong,  “un piccolo passo per l'uomo e un grande passo per l'umanità”.
{:.giustificato}

![Test immagine]({{site.baseurl}}/assets/images/avvoavvo2.png)

## CONCLUSIONI
L’uso combinato di rag e fine-tuning risolve una serie di cose legate sia ai problemi degli llm (TIPO CHE Il RAG garantisce la trasparenza) che al fatto che l’ambito legale è particolare ma, essendo la legge un tema molto delicato, restano aperte alcune questioni e la ci sono ancora molte domande relative a cosa si può fare e cosa no relativamente al rapporto tra legge e AI (inserire qualche parola dell’avvocato Traversi)
{:.giustificato}