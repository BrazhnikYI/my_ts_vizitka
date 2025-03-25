document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    if (currentLang === "uk") {
        document.documentElement.lang = "en";
        document.title = "Servers. Databases. Projects";
        document.querySelector("h1").innerText = "Servers. Databases. Projects";
        document.querySelector("footer p").innerText = "© 2025 HELP TO CHOOSE, CONFIGURE, PROTECT";
        updateMenu("en");
    } else {
        document.documentElement.lang = "uk";
        document.title = "Сервери. Бази даних. Проекти";
        document.querySelector("h1").innerText = "Сервери. Бази даних. Проекти";
        document.querySelector("footer p").innerText = "© 2025 ДОПОМОЖЕМО ОБРАТИ, НАЛАШТУВАТИ, ЗАХИСТИТИ";
        updateMenu("uk");
    }
});

function updateMenu(lang) {
    const menu = {
        uk: {
            services: "НАШІ ПОСЛУГИ",
            portfolio: "ПОРТФОЛІО",
            contacts: "КОНТАКТИ",
            switchLang: "UA / ENG"
        },
        en: {
            services: "OUR SERVICES",
            portfolio: "PORTFOLIO",
            contacts: "CONTACTS",
            switchLang: "ENG / UA"
        }
    };
    document.querySelectorAll(".menu-item h2")[0].innerText = menu[lang].services;
    document.querySelectorAll(".menu-item h2")[1].innerText = menu[lang].portfolio;
    document.querySelectorAll(".menu-item h2")[2].innerText = menu[lang].contacts;
    document.querySelector("#lang-toggle").innerText = menu[lang].switchLang;
}
