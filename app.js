const countriesContainer = document.getElementById('countries-container');
const searchInput = document.getElementById('search-input');
const regionFilter = document.getElementById('region-filter');
const sortFilter = document.getElementById('sort-filter');
const loader = document.getElementById('loader');

let allCountries = []; 

async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region');
        if (!response.ok) throw new Error('Network error');
        
        allCountries = await response.json();
        loader.classList.add('hidden'); // Hide loader
        displayCountries(allCountries); // Initial render
    } catch (error) {
        loader.innerText = "Failed to load data. ❌";
        console.error(error);
    }
}

// 2. Display Function (The "Dynamic Rendering" part)
function displayCountries(countries) {
    countriesContainer.innerHTML = ''; // Clear previous
    
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
            <div class="card-content">
                <h3>${country.name.common}</h3>
                <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            </div>
        `;
        countriesContainer.appendChild(card);
    });
}

// 3. Filter and Sort Logic (Higher-Order Functions)
function updateUI() {
    let filtered = allCountries.filter(c => 
        c.name.common.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (regionFilter.value !== 'all') {
        filtered = filtered.filter(c => c.region === regionFilter.value);
    }

    if (sortFilter.value === 'pop') {
        filtered.sort((a, b) => b.population - a.population);
    } else {
        filtered.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    displayCountries(filtered);
}

// Event Listeners
searchInput.addEventListener('input', updateUI);
regionFilter.addEventListener('change', updateUI);
sortFilter.addEventListener('change', updateUI);

// Start the app
fetchCountries();