fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    //console.log(result);

    //filtering countries using region as Asia
    let countryAsia = result.filter((each) => {
      return each.region === "Asia";
    });
    console.log(countryAsia);

    //filtering countries using population below 200000
    let population = result.filter((each) => {
      return each.population < 200000;
    });
    console.log(population);

    //printing all country names
    result.forEach((each) => {
      console.log(each.name);
    });
    //printing all capital names
    result.forEach((each) => {
      console.log(each.capital);
    });

    //printing all flag urls
    result.forEach((each) => {
      console.log(each.flag);
    });

    //total population of countries
    let totalPopulation = result.reduce((total, individual) => {
      return total + individual.population;
    }, 0);
    console.log(totalPopulation);

    //filtering countries that uses dollar as currency
    let dollar = result.filter((each) => {
      return each.currencies[0].name === "United States dollar";
    });
    console.log(dollar);
  })
  .catch((err) => {
    console.log(err);
  });