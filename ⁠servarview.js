// servarview.js - Real-time Visitor Counter
(function() {
    // دروستکردنی بۆکسەکە بۆ پیشاندانی ژمارەی سەردانەکان بە دیزاینێکی سەرنجڕاکێش
    function initVisitorCounter() {
        if (document.getElementById('hama-visitor-counter')) return;

        const counterBox = document.createElement('div');
        counterBox.id = 'hama-visitor-counter';
        counterBox.style.cssText = `
            position: fixed;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(16, 16, 16, 0.9);
            border: 1px solid rgba(255, 215, 0, 0.4);
            color: #ffd700;
            padding: 8px 16px;
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
        counterBox.innerHTML = 'کۆی سەردانی کەرانی سێرڤەرەکەمان😍: <span id="visitor-count-num">⏳</span>';
        document.body.appendChild(counterBox);

        // بەستنەوە بە سێرڤەری پاشبنەما بۆ ژماردنی ڕاستەقینە (بێ فەیک)
        fetch('https://api.countapi.xyz/hit/hamavip-pixel-visitors/visits')
            .then(response => response.json())
            .then(data => {
                document.getElementById('visitor-count-num').innerText = data.value;
            })
            .catch(error => {
                // ئەگەر کێشەی هێڵ هەبوو، سفر پیشان دەدات تاوەکو زانیارییەکە دەگاتەوە
                document.getElementById('visitor-count-num').innerText = "0";
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisitorCounter);
    } else {
        initVisitorCounter();
    }
})();
