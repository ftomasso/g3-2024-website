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


[//]: # (Time_series section)
{% capture time_series_content %}
    {% include_relative snippets/Timeseries.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=time_series_content %}

[//]: # (Topic section)
{% capture topic_content %}
    {% include_relative snippets/topic.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=topic_content %}


[//]: # (Topic_per_topic section)
{% capture topicX_content %}
    {% include_relative snippets/topicxtopic.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=topicX_content %}



[//]: # (Grafo section)
{% capture grafoX_content %}
    {% include_relative snippets/grafo.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=grafoX_content %}


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


{% include modal-component-FAB.html title="Avvochat - il tuo avvocato a portata di clic" id="avvo-chat" html_to_include="https://gradio-map-airbnb.hf.space" height="530"%}