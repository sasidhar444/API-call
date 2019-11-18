/*fetch('https://cloudbilling.googleapis.com/v1/services/6F81-5844-456A/skus?key=AIzaSyDqkxPUrrI1JqfelekfHkei3oYdu-aNYf4').then( (res) => {


res.json().then((data) => {
    console.log(data);
})
}) */
var cost;
fetch('https://cloudbilling.googleapis.com/v1/services/6F81-5844-456A/skus?key=AIzaSyDqkxPUrrI1JqfelekfHkei3oYdu-aNYf4')
.then((res) => {
    res.json().then((data) => {
         document.getElementById('paraId').innerHTML = data.skus[0].pricingInfo[0].pricingExpression.tieredRates[0].unitPrice.nanos;
        console.log(data.skus[0].pricingInfo[0].pricingExpression.tieredRates[0].unitPrice.nanos);
        

    })
})