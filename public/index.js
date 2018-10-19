var recipeTemplate = document.querySelector('#recipe-card');
var recipeContainer = document.querySelector('.row');


// axios.get("http://localhost:3000/api/recipes").then(function(response){
//   console.log(response.data);
// });


axios.get("http://localhost:3000/api/recipes").then(function(response) {
  var recipes = response.data;
  console.log(recipes);

  recipes.forEach(function(recipe) {
    var recipeClone = recipeTemplate.content.cloneNode(true);
    
    recipeClone.querySelector('.recipe-title').innerText = recipe.title;
    recipeClone.querySelector('.ingredients').innerText = recipe.ingredients;
    recipeClone.querySelector('.chef').innerText = recipe.chef
    recipeClone.querySelector('.prep-time').innerText = recipe.["formatted"]["prep_time"];
    recipeClone.querySelector('.recipe-title').href = "/recipe/" + recipe["id"];
    recipeClone.querySelector('img.card-img-top').src = recipe["image_url"];

    recipeContainer.appendChild(recipeClone);
  });
});

