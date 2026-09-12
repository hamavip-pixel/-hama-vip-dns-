// servarview.js - Local Storage Visitor Counter
(function() {
    function initVisitorCounter() {
        if (document.getElementById('hama-visitor-counter')) return;

        // ژماردنی سەردانەکان لە ناوخۆی بڕاوزەری بەکارهێنەران بە شێوازێکی زۆر خاوێن
        let visits = localStorage.getItem('hama_server_visits');
        if (!visits) {
            visits = 1; // ئەگەر یەکەم جار بوو، لە 1 دەست پێدەکات
        } else {
            // ئەگەر لە دانیشتنێکی نوێدا هاتە ژوورەوە یان پەیجەکە گۆڕی، ژمارەکە زیاد دەکات
            if (!sessionStorage.getItem('hama_visited_session')) {
                visits = parseInt(visits) + 1;
                sessionStorage.setItem('hama_visited_session', 'true');
            }
        }
        localStorage.setItem('hama_server_visits', visits);

        const counterBox = document.createElement('div');
        counterBox.id = 'hama-visitor-counter';
        counterBox.style.cssText = `
            position: fixed;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(16, 16, 16, 0.95);
            border: 1px solid rgba(255, 215, 0, 0.4);
            color: #ffd700;
            padding: 8px 18px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
            z-index: 99999;
            box-shadow: 0 4px 15px rgba(0,0,0,0.6);
            backdrop-filter: blur(5px);
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            direction: rtl;
        `;
        counterBox.innerHTML = `کۆی سەردانی کەرانی سێرڤەرەکەمان😍: <span style="color: #fff; margin-right: 5px;">${visits}</span>`;
        document.body.appendChild(counterBox);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisitorCounter);
    } else {
        initVisitorCounter();
    }
})();
