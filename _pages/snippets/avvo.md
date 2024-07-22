
# COME NASCE AVVOCHAT?


Per la creazione del modello siamo partiti con l’istruire un LLM già esistente (ANITA, modello sviluppato dall’Università di Bari)  su un dataset composto dai 66.000 articoli a cui abbiamo già fatto riferimento e che, lo ricordiamo, sono scritti in un linguaggio colloquiale e non specialisti e, quindi, risultano facilmente comprensibili anche per chi non ha competenze legali. Abbiamo svolto, dunque, quella che viene definita un’operazione di fine-tuning. Siamo passati, poi, a una seconda fase di test, in cui abbiamo sottoposto all’AvvoChat e ad altri tre LLM (Mistral, Anita, e Chat-GPT ) alcune domande a tema legale e confrontando, poi, le risposte.
{:.giustificato}

![Test immagine]({{site.baseurl}}/assets/images/avvoavvo2.png)


{% capture llm_tech %}
{% include_relative snippets/tech/llm_tech.md %}
{% endcapture %}

{% include tech-content.html content=llm_tech %}



## COME SE L’È CAVATA L’AVVOCHAT?


Dire fatto degli avvocati (integrare con cose di francesca)




## CONCLUSIONI
L’uso combinato di rag e fine-tuning risolve una serie di cose legate sia ai problemi degli llm (TIPO CHE Il RAG garantisce la trasparenza) che al fatto che l’ambito legale è particolare ma, essendo la legge un tema molto delicato, restano aperte alcune questioni e la ci sono ancora molte domande relative a cosa si può fare e cosa no relativamente al rapporto tra legge e AI (inserire qualche parola dell’avvocato Traversi)
{:.giustificato}