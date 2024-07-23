function drawChart() {
    const specUrl = "{{site.baseurl}}/assets/charts/chart_accuracy.json";

    // Fetch the spec, modify it, and then embed it
    fetch(specUrl)
        .then(response => response.json())
        .then(spec => {
            // Modify the width and height properties of the spec
            spec.width = 400;  // Set the desired width
            spec.height = 200;  // Set the desired height
            
            // Embed the modified spec
            vegaEmbed('#chart', spec).then(result => {
                console.log(result);
            }).catch(console.error);
        })
        .catch(console.error);
}
