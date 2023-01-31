let abc = new XMLHttpRequest();

abc.open("GET", "https://restcountries.com/v3.1/all");
abc.send();

abc.onload = function displayflag() { 

    var data = JSON.parse(abc.response);
    console.log(data);

   for (var i in data) {
        
       console.log(data[i].flags.png);
       console.log(`Name=${data[i].name.common}, Region=${data[i].region},Subregion=${data[i].subregion},Population=${data[i].population}`);
    }

   
    
}