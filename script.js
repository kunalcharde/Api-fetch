fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
).then((data) => {
  return data.json();
}).then((objectdata)=>{
    let tabledata="";
    objectdata.map((values)=>{
        tabledata +=`<tr style="Border-bottom:2px solid white">
        <td><img src="${values.image}">  ${values.name}</td>
        <td>${(values.symbol).toUpperCase()}</td>
        <td>$${values.current_price}</td>
        <td>$${(values.market_cap_change_24h)}</td>
        <td class="parcent">${parseFloat(values.market_cap_change_percentage_24h).toFixed(2)}%</td>
        <td>Mkt Cap: ${values.market_cap}</td>
      </tr>`;
    })
    document.getElementById("table_body").innerHTML=tabledata;

})

