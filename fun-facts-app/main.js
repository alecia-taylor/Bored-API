import { fetchFact, addFact, updateFact } from './api.js';
import { updateFactUI, showError } from './ui.js';

// Search and fetch fact based on user input
document.getElementById("search").addEventListener('input', async () => {
    const query = document.getElementById("search").value;
    const data = await fetchFact(query);
    if (data && data.fact) {
        updateFactUI(data.fact);
    } else {
        showError("No facts found.");
    }
});

// Fetch a random fact
document.getElementById("search").addEventListener('click', async () => {
    const data = await fetchFact();
    if (data && data.fact) {
        updateFactUI(data.fact);
    } else {
        showError("No facts found.");
    }
});

// Add a new fact
document.getElementById("newFactButton").addEventListener('click', async () => {
    const newFact = document.getElementById("newFact").value;
    const response = await addFact(newFact);
    if (response && response.message) {
        alert(response.message);
    } else {
        alert("Error adding fact!");
    }
});

// Update an existing fact by index
document.getElementById("updateFactButton").addEventListener('click', async () => {
    const index = document.getElementById("updateIndex").value;
    const fact = document.getElementById("updatedFact").value;
    const response = await updateFact(index, fact);
    if (response && response.message) {
        alert(response.message);
    } else {
        alert("Error updating fact!");
    }
});
