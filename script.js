const searchInput = document.querySelector('#searchInput');
const resultsList = document.querySelector('#results');
const searchButton = document.querySelector("#searchButton");

const apiKey = "c618af4b29924318acbc2996effafbf3"; 

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchValue = searchInput.value.trim();
    if (!searchValue) return;

    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(searchValue)}&number=10&addRecipeInformation=true&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const formatted = data.results.map(recipe => ({
                recipe: {
                    label: recipe.title,
                    image: recipe.image,
                    url: recipe.sourceUrl
                }
            }));
            displayRecipes(formatted);
        } else {
            resultsList.innerHTML = '<p>No recipes found.</p>';
        }
    } catch (error) {
        console.error(error);
        resultsList.innerHTML = '<p>Error fetching recipes.</p>';
    }
});

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <li class="recipe-item">
            <div>
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                <h3>${recipe.recipe.label}</h3>
            </div>
            <div class="recipe-link">
                <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
            </div>
        </li>
        `;
    });
    resultsList.innerHTML = html;
}
