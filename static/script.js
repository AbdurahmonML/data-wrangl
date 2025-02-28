document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json") // Fetch JSON file
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("data-container");

            // Loop through JSON data and display each user's info
            data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user");
                userDiv.innerHTML = `<strong>${user.name}</strong> (Age: ${user.age}) - ${user.city}`;
                container.appendChild(userDiv);
            });
        })
        .catch(error => console.error("Error loading JSON data:", error));
});
