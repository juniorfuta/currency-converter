fetch('https://api.coinbase.com/v2/prices/ETH-USD/buy').then (answer=>{
  console.log(answer.json())
})