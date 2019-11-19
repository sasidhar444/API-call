var cost;
/*
//fetch('http://localhost:3000/gcp_price_list')
fetch('https://storage.googleapis.com/hostapi/pricelist.json')
.then((res) => {
    res.json().then((data) => {
         //document.getElementById('paraId').innerHTML = data.skus[0].pricingInfo[0].pricingExpression.tieredRates[0].unitPrice.nanos;
        //console.log(data.skus[0].pricingInfo[0].pricingExpression.tieredRates[0].unitPrice.nanos);
        document.getElementById('paraId').innerHTML =data.STANDARD1.europe_west1;
   //console.log(data.STANDARD1.europe_west1);
       //console.log(data);
    })
})*/


fetch('https://storage.googleapis.com/hostapi/pricelist.json').then((res)=> {
    res.json().then((data) => {
        console.log(data.gcp_price_list.STANDARD1.us_central1);
        document.getElementById('paraId').innerHTML = data.gcp_price_list.STANDARD1.us_central1;
    })
})
