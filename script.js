fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
).then((data) => {
  return data.json();
}).then((objectdata)=>{
    let tabledata="";
    objectdata.map((values)=>{

      // this function will change the number to currency
      let number1 = values.current_price;
        let formatted1 = new Intl.NumberFormat("en-US",{
          style: 'currency',
          currency:'USD'
        }).format(number1);
      let number2 = values.market_cap_change_24h;
        let formatted2 = new Intl.NumberFormat("en-US",{
          style: 'currency',
          currency:'USD'
        }).format(number2);
      let number3 = values.market_cap;
        let formatted3 = new Intl.NumberFormat("en-US",{
          style: 'currency',
          currency:'USD'
        }).format(number3);
        // ---------
        tabledata +=`<tr style="Border-bottom:2px solid white">
        <td><img src="${values.image}">  ${values.name}</td>
        <td>${(values.symbol).toUpperCase()}</td>
        <td>${formatted1}</td>
        <td>${formatted2}</td>
        <td>${parseFloat(values.market_cap_change_percentage_24h).toFixed(2)}%</td>
        <td>Mkt Cap: ${formatted3}</td> 
      </tr>`; //values.market_cap
    })
    document.getElementById("table_body").innerHTML=tabledata;

})

