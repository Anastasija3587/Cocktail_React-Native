export const fetchDrinks = value =>
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.drinks;
    });

export const fetchFilter = () =>
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.drinks;
    });
