

preencherContador()

function preencherContador() {

Promise.all([swapiGet('people/'), swapiGet('vehicles/')])
.then(function(results) {


    
});

}

function swapiGet(param) {

return axios.get(`https://swapi.dev/api/${param}`);


}