Dopo una serie di test e tenendo in considerazione anche i risultati sui quiz ministeriali, abbiamo deciso di creare il nostro AvvoChat a partire da ANITA, che abbiamo allenato con un fine-tuning mirato, al quale abbiamo affiancato la potenza del RAG. I passaggi per creare il nostro personale avvocato digitale sono stati:
{:.giustificato}

1.**Creazione del dataset** e caricamento su Hugging Face: Utilizzando le librerie re, spaCy e NLTK, abbiamo creato un dataset con i 66.000 articoli a tema legale. Da questi articoli sono state estratte circa 160.000 Q&A. Questo dataset è stato poi caricato su Hugging Face.
{:.giustificato}

2.**Adattamento dei codici** di ANITA su GitHub: Abbiamo adattato il codice reso disponibile su GitHub dagli sviluppatori di ANITA (https://github.com/marcopoli/LLaMAntino-3-ANITA) al nostro caso specifico, utilizzando il dataset di domande e risposte caricato su Hugging Face per il processo di allenamento. Per il fine-tuning abbiamo utilizzato le macchine del CNR dell’Università di Pisa, con 8 H100 da 80 Gb ciascuna.
{:.giustificato}

3.**Indicizzazione e vettorizzazione con Weaviate**: In questa fase, è stato creato un unico file .jsonl contenente le domande con la risposta esatta del test minsiteriale, i codici legislativi e tutti i documenti utilizzati nel fine-tuning, suddivisi in domande e risposte. È stata poi creata una pipeline con Haystack, che possiamo riassumere nei seguenti macroblocchi:
{:.giustificato}

-	**SentenceTokenizer**: divisione dei documenti in blocchi di 4 frasi.
-	**Vettorizzazione**: indicizzazione e vettorizzazione dei documenti suddivisi in frasi tramite intfloat/multilingual-e5-large (un LLM specializzato nella gestione di testi multilingua) e la funzione SentenceTransformersDocumentEmbedder() di Haystack.
-	**Caricamento su Weaviate**: il tutto è stato caricato su una sandbox di Weaviate.
{:.giustificato}

4.**Creazione della pipeline con Haystack e Gradio**: Infine, utilizzando Haystack, è stata creata una pipeline completa che prende in input le domande dell’utente, richiama i documenti più pertinenti tra quelli caricati nel cloud di Weaviate, costruisce un prompt da dare in pasto all’LLM fine-tunato, contenente la domanda dell’utente e i documenti richiamati, genera un risposta alla domanda posta nel prompt. Il tutto poi è stato inserito in un’interfaccia Gradio per rendere l’utilizzo della chat fruibile a tutti.
{:.giustificato}