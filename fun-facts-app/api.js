// Fetch a random fun fact or search for a specific fact by keyword
export async function fetchFact(query) {
    let url = "http://localhost:3000/facts";
    if (query) {
        url += `?q=${encodeURIComponent(query)}`;  // Search by keyword
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching fact:", error);
        return { fact: "Error fetching fact!" };
    }
}

// Add a new fun fact
export async function addFact(fact) {
    try {
        const response = await fetch("http://localhost:3000/facts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fact }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error adding fact:", error);
        return { message: "Error adding fact!" };
    }
}

// Update an existing fun fact by ID
export async function updateFact(id, fact) {
    try {
        const response = await fetch(`http://localhost:3000/facts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fact }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error updating fact:", error);
        return { message: "Error updating fact!" };
    }
}

// Partially update an existing fun fact by ID
export async function patchFact(id, fact) {
    try {
        const response = await fetch(`http://localhost:3000/facts/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fact }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error patching fact:", error);
        return { message: "Error patching fact!" };
    }
}
