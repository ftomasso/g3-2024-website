
# L’AVVOCHAT: L’LLM A TEMA GIURIDICO PENSATO PER I CITTADINI COMUNI




{% capture rag_tech %}
{% include_relative snippets/tech/rag_tech.md %}
{% endcapture %}

{% include tech-content.html content=rag_tech %}


La grande quantità di siti web divulgativi e l’apparizione, sui social, di quelli che potremmo definire veri e propri “avvocati influencer” sono una spia, dunque, del fatto che gli italiani si affidano effettivamente alla rete per risolvere dubbi di natura legale. L’enorme quantità di dati, tuttavia, può costituire, come abbiamo già avuto modo di accennare, un problema non da poco. E allora perché non dotare i comuni cittadini di uno strumento che possa aiutarli a reperire più velocemente l’informazione di cui hanno bisogno?  
{:.giustificato}



![Test immagine]({{site.baseurl}}/assets/images/ragprova.png)


Il RAG è un sistema che converte documenti in vettori semantici (embedding) e li raccoglie in un database chiamato VECTOR DB. Quando viene posta una domanda legale, il sistema recupera le informazioni pertinenti dal VECTOR DB e le aggiunge alla domanda, permettendo ad Avvochat di generare risposte corrette e chiare in modo efficiente.




Nasce da qui l’idea di creare un LLM a tema legale, facilmente consultabile e alla portata di tutti: l’AvvoChat. Specializzato su un dominio di conoscenza giuridica, AvvoChat si avvale di un sistema di _Retrieval-Augmented Generation_ (RAG) che garantisce l’affidabilità delle risposte generate. Come lo fa? Andando a recuperare, all’interno dei dati a disposizione dell’LLM, solo le informazioni effettivamente rilevanti, riducendo, così, il rischio di risposte sbagliate (quelle che vengono spesso definite “allucinazioni”). Il RAG, in altre parole, permette all’LLM di prendere in considerazione solo le informazioni davvero utili, riducendo di molto la quantità di dati da gestire per la generazione della risposta e arginando uno dei principali problemi dell’AI generativa, legato alla cosiddetta _short term-memory_ (cioè la memoria a breve termine). Più elevata è, infatti, la quantità di dati da gestire, più la memoria dell’LLM farà fatica a ricordarli tutti. Questa tendenza alla dimenticanza è proprio una delle principali cause di allucinazione dei modelli linguistici generativi.  
{:.giustificato}












