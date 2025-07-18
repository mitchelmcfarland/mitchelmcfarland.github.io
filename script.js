if (localStorage.getItem("theme") == "dark" || 
(!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add('dark-mode');
}


document.getElementById("theme-toggle").addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

