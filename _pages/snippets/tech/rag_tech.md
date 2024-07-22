 <vegachart schema-url="{{site.baseurl}}/assets/charts/modified_chart_accuracy3.json" 
        style="width: 80%; height: 80%; max-width: 1000px; max-height: 800px;"></vegachart>

Analizzando questo secondo dataset abbiamo evidenziato differenze strutturali e linguistiche tra i codici:
Abbiamo testato principalmente il meccanismo di retrieval specifico del dominio su 3 branche principali del diritto: amministrativo, civile e costituzionale e notato come nei test a fasce di difficoltà la pertinenza del materiale recuperato fosse tendenzialmente legata alla struttura frasale delle norme. Quando una domanda citava espressamente il numero di articolo o il luogo in cui trovare la norma il meccanismo catturava più facilmente la risposta corretta, rivelando una efficacia constatata con un setting di parametri a metà strada tra il richiamo per keyword e per vettori.
Il rag, il meccanismo di retrieval che abbiamo impostato per attingere conoscenze specifiche di dominio ha rilevato significative differenze di accuratezza anche rispetto a modelli non propriamente costruiti con questo sistema di recupero su dataset strutturato. Infatti a confronto con gli altri modelli testati la sua prestazione ha vinto sia su Mistaral che su chat GPT.


 <vegachart schema-url="{{site.baseurl}}/assets/charts/rag2.json" 
        style="width: 80%; height: 80%; max-width: 1000px; max-height: 800px;"></vegachart>
