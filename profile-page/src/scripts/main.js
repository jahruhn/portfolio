// This file contains JavaScript code for interactivity on the profile page.

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

function loadComponents() {
    const components = ['projects', 'certificates', 'experience', 'skills'];
    components.forEach(component => {
        fetch(`./components/${component}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(`${component}-container`).innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
}