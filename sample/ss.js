
var cost;
fetch('http://localhost:3000/gcp_price_list')
.then((res) => {
    res.json().then((data) => {
         //document.getElementById('paraId').innerHTML = data.skus[0].pricingInfo[0].pricingExpression.tieredRates[0].unitPrice.nanos;
        //console.log(data.skus[0].pricingInfo[0].pricingExpression.tieredRates[0].unitPrice.nanos);
   console.log(data.STANDARD1.europe_west1);
     //  console.log(data.sustained_use_tiers_new);
    })
})