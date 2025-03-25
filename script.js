document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    const texts = {
        uk: {
            title: "IT-підтримка вашого бізнесу",
            services: "НАШІ ПОСЛУГИ",
            portfolio: "ПОРТФОЛІО",
            contacts: "КОНТАКТИ",
            switchLang: "UA / ENG",
            bottomText: "Допоможемо. Підтримаємо. Захистимо.",
            footerText: "© 2025 ДОПОМОЖЕМО ОБРАТИ, НАЛАШТУВАТИ, ЗАХИСТИТИ"
        },
        en: {
            title: "IT Support for Your Business",
            services: "OUR SERVICES",
            portfolio: "PORTFOLIO",
            contacts: "CONTACTS",
            switchLang: "ENG / UA",
            bottomText: "We Help. We Support. We Protect.",
            footerText: "© 2025 HELP TO CHOOSE, CONFIGURE, PROTECT"
        }
    };

    const newLang = currentLang === "uk" ? "en" : "uk";
    document.documentElement.lang = newLang;
    document.title = texts[newLang].title;
    document.getElementById("site-title").innerText = texts[newLang].title;
    document.getElementById("services-title").innerText = texts[newLang].services;
    document.getElementById("portfolio-title").innerText = texts[newLang].portfolio;
    document.getElementById("contacts-title").innerText = texts[newLang].contacts;
    document.getElementById("lang-toggle").innerText = texts[newLang].switchLang;
    document.getElementById("bottom-text").innerText = texts[newLang].bottomText;
    document.getElementById("footer-text").innerText = texts[newLang].footerText;
});
