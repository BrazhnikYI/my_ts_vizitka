document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    const texts = {
        uk: {
            title: "IT-підтримка вашого бізнесу",
            services: "НАШІ ПОСЛУГИ",
            portfolio: "ПОРТФОЛІО",
            contacts: "КОНТАКТИ",
            switchLang: "UA / ENG",
            bottomText: "2016 © Допоможемо. Підтримаємо. Захистимо.",
            serviceItems: [
                "Налаштування сервера",
                "Обслуговування баз даних",
                "Інформаційна безпека",
                "Міграція сервісів",
                "Консультації і технічна підтримка",
                "Оптимізація витрат на IT",
                "Супровід проектів"
            ],
            portfolioItems: [
                "Мережа аптек – повний супровід",
                "Виробниче підприємство – сервери, інфобезпека",
                "Аграрні компанії – частковий супровід, хмарні сервери",
                "Малий бізнес – роздрібні магазини, хмарні сервіси"
            ],
            contactsItems: ["Юрій", "Віталій"]
        },
        en: {
            title: "IT Support for Your Business",
            services: "OUR SERVICES",
            portfolio: "PORTFOLIO",
            contacts: "CONTACTS",
            switchLang: "ENG / UA",
            bottomText: "2016 © We Help. We Support. We Protect.",
            serviceItems: [
                "Server Setup",
                "Database Maintenance",
                "Cybersecurity",
                "Service Migration",
                "Consulting & Tech Support",
                "IT Cost Optimization",
                "Project Support"
            ],
            portfolioItems: [
                "Pharmacy Chain – Full Support",
                "Manufacturing – Servers, Security",
                "Agricultural Companies – Cloud Servers",
                "Small Business – Cloud Services"
            ],
            contactsItems: ["Yuriy", "Vitaliy"]
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

    // Переклад підпунктів меню
    document.querySelectorAll(".service-item").forEach((item, index) => {
        item.innerText = texts[newLang].serviceItems[index];
    });

    document.querySelectorAll(".portfolio-item").forEach((item, index) => {
        item.innerText = texts[newLang].portfolioItems[index];
    });

    document.getElementById("yuriy").innerText = texts[newLang].contactsItems[0];
    document.getElementById("vitaliy").innerText = texts[newLang].contactsItems[1];
});
