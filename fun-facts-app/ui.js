// Update the fact display
export function updateFactUI(fact) {
    document.getElementById("fact").textContent = fact;
}

// Show an error message in the fact box
export function showError(message) {
    document.getElementById("fact").textContent = message;
}
