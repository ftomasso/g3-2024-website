---
layout: default-full
title: "Avvochat"
subtitle: "Prova la Demo"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/Prova1.jpeg
header_title: "Avvochat"
vega: true
---


[//]: # (variables section)




[//]: # (Mission section)
{% capture mission_content %}
    {% include_relative snippets/mission.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=mission_content %}

[//]: # (Topic section)

{% capture topic_clu %}
{% include_relative snippets/clustergraficoprova.md %}
{% endcapture %}


{% capture topic_content %}
    {% include_relative snippets/topic.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=topic_content %}


[//]: # (Time_series section)
{% include one-column.html dimension="small" title="L'andamento temporale" %}
{% include chart-selector.html dimension="small" dataset="chart-selector" %}


{% capture time_series_content %}
    {% include_relative snippets/Timeseries.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=time_series_content %}

[//]: # (Topic_per_topic section)
<div class="bg-color-full bg-color py-3 my-5 text-white" style="min-height:45vh; background-color: black;">

{% capture topicX_content %}
    {% include_relative snippets/topicxtopic.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=topicX_content %}
</div>

[//]: # (LLM section)
{% capture grafoX_content %}
    {% include_relative snippets/largelanguage.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=grafoX_content %}


[//]: # (Avvochat_section)
{% capture achat_content %}
    {% include_relative snippets/avvo.md %}
{% endcapture %}


{% include one-column.html dimension="small" content=achat_content %}

[//]: # (Grafo section)
{% capture grafoX_content %}
    {% include_relative snippets/grafo.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=grafoX_content %}


{% include code-explanation.html %}


{% include modal-component-FAB.html title="Avvochat - il tuo avvocato a portata di clic" id="avvo-chat" html_to_include="https://andreaalessandrelli4-avvochat-v02.hf.space" height="530"%}