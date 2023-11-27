let data;
async function getData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    data = await res.json();
    let populationSum = data.reduce((result, item)=> result+item.population,0);
        console.log(populationSum)
    let content=Object.values(data);
    content.forEach(function(elem,index,arr){
        console.log(elem.name.common, elem.capital, elem.flag);
    })
    let lowPop=data.filter(item=>item.population<200000);
    let arr = lowPop.map(item=>item.name.common);
        console.log(arr);  
    let Cont=data.filter(item=>item.continents[0]==="Asia");
    let Asia = Cont.map(item=>item.name.common);
        console.log(Asia);
    content.forEach(function(elem,index,arr){
        if(elem.currencies==="USD"){
            console.log(elem.name.common);
        }

    })
  
}


getData();