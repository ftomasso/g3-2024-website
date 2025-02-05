---
layout: default-full
title: "Una Questione di Codice"
subtitle: "L'implicazione dell'AI e il diritto"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/Prova2.jpeg
header_title: "Una Questione di Codice"
vega: true
---

[//]: # (variables section)


{% capture stragi_all %}
    {% include_relative snippets/mappa-stragi-intro.md %}
{% endcapture %}


[//]: # (Introduction section)
{% capture introduction_content %}
    {% include_relative snippets/introduction.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=introduction_content %}


[//]: # (Chart Timeline Stragi)
<br>
{% capture timeline_stragi %}
{% include_relative snippets/chart-timeline.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=timeline_stragi %}

[//]: # (Big numbers)
<div class="bg-color bg-color-full py-3 my-5">
    {% include one-column.html dimension="small" title="I numeri delle stragi per matrice" %}
    {% include big-numbers-cards.html data="morti-matrice" number="Morti" description="Matrice" %}
</div>

[//]: # (Chart Two columns)
{% capture introduction_images %}
{% include_relative snippets/gallery-images.md %}
{% endcapture %}

{% capture section_1_content %}
    {% include_relative snippets/section-1.md %}
{% endcapture %}

{% include two-columns.html col-one=introduction_images col-two=section_1_content %}

[//]: # (Cards Gallery)
<div class="bg-color bg-color-full py-3 my-5" id="galleria">
    {% include one-column.html dimension="small" title="Gallerie di immagini e chart" %}
</div>
{% include img-gallery-cards.html width='23%' datasource=site.data.img-selector url='url' name='name' description='description' %}


[//]: # (Image selector)
<div class="bg-color-full bg-color py-3 my-5" style="min-height:45vh">
{% include one-column.html dimension="small" title="Seleziona un'immagine" %}
{% include img-selector.html dataset="img-selector" button_name="name" url="url" %}
</div>

[//]: # (Chart selector)
{% include one-column.html dimension="small" title="Numero di morti per tipo di matrice" %}
{% include chart-selector.html dimension="small" dataset="chart-selector" %}


[//]: # (Gallery explanation)
{% capture galleries_explanation %}
{% include_relative snippets/galleries-explanation.md %}
{% endcapture %}
{% include one-column.html dimension="small" content=galleries_explanation %}
<br>

[//]: # (Map with modal)
<hr>
{% capture mappa_stragi_intro %}
{% include_relative snippets/mappa-stragi-intro.md %}
{% endcapture %}
{% include one-column.html dimension="small" content=mappa_stragi_intro %}
<hr>

[//]: # (Video in one column)
{% capture video_content %}
{% include snippets/video.html id="UOQEACobAHk" provider="youtube" video_res="hq2" %}
{% endcapture %}

{% include one-column.html dimension="small" title="Presentazione di Paolo Pezzino" content=video_content %}

{% include code-explanation.html %}