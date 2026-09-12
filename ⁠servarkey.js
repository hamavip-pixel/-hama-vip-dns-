/**
 * Hx-Speech Portal - Secure 50-Key Database System
 * Author: MATiX
 */

(function () {
    'use strict';

    // ٥٠ کلیلی سێرڤەر (هەر یەکێکیان تەنها بۆ یەک کەس کار دەکات)
    const SERVER_KEYS = {
        "HX-PRO-JIN9X": { used: false, maxLimit: "5GB" },
        "HAMA-VIP-2026-X1": { used: false, maxLimit: "5GB" },
        "MATRIX-KEY-777": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-SECURE-99": { used: false, maxLimit: "5GB" },
        "VIP-MASTER-KEY-01": { used: false, maxLimit: "5GB" },
        "SECURE-ACCESS-88X": { used: false, maxLimit: "5GB" },
        "HX-PRO-ULTRA-55": { used: false, maxLimit: "5GB" },
        "HAMA-VIP-ACCESS-9": { used: false, maxLimit: "5GB" },
        "DEV-MATRIX-KEY-404": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-VIP-PRO": { used: false, maxLimit: "5GB" },
        "PRO-KEY-ALPHA-11": { used: false, maxLimit: "5GB" },
        "PRO-KEY-BETA-22": { used: false, maxLimit: "5GB" },
        "PRO-KEY-GAMMA-33": { used: false, maxLimit: "5GB" },
        "PRO-KEY-DELTA-44": { used: false, maxLimit: "5GB" },
        "PRO-KEY-OMEGA-55": { used: false, maxLimit: "5GB" },
        "VIP-USER-XOR-01": { used: false, maxLimit: "5GB" },
        "VIP-USER-XOR-02": { used: false, maxLimit: "5GB" },
        "VIP-USER-XOR-03": { used: false, maxLimit: "5GB" },
        "VIP-USER-XOR-04": { used: false, maxLimit: "5GB" },
        "VIP-USER-XOR-05": { used: false, maxLimit: "5GB" },
        "HX-ELITE-KEY-100": { used: false, maxLimit: "5GB" },
        "HX-ELITE-KEY-200": { used: false, maxLimit: "5GB" },
        "HX-ELITE-KEY-300": { used: false, maxLimit: "5GB" },
        "HX-ELITE-KEY-400": { used: false, maxLimit: "5GB" },
        "HX-ELITE-KEY-500": { used: false, maxLimit: "5GB" },
        "MATRIX-PRIME-1": { used: false, maxLimit: "5GB" },
        "MATRIX-PRIME-2": { used: false, maxLimit: "5GB" },
        "MATRIX-PRIME-3": { used: false, maxLimit: "5GB" },
        "MATRIX-PRIME-4": { used: false, maxLimit: "5GB" },
        "MATRIX-PRIME-5": { used: false, maxLimit: "5GB" },
        "SECURE-PASS-901": { used: false, maxLimit: "5GB" },
        "SECURE-PASS-902": { used: false, maxLimit: "5GB" },
        "SECURE-PASS-903": { used: false, maxLimit: "5GB" },
        "SECURE-PASS-904": { used: false, maxLimit: "5GB" },
        "SECURE-PASS-905": { used: false, maxLimit: "5GB" },
        "HAMA-GOLD-KEY-1": { used: false, maxLimit: "5GB" },
        "HAMA-GOLD-KEY-2": { used: false, maxLimit: "5GB" },
        "HAMA-GOLD-KEY-3": { used: false, maxLimit: "5GB" },
        "HAMA-GOLD-KEY-4": { used: false, maxLimit: "5GB" },
        "HAMA-GOLD-KEY-5": { used: false, maxLimit: "5GB" },
        "ULTRA-VIP-PASS-1": { used: false, maxLimit: "5GB" },
        "ULTRA-VIP-PASS-2": { used: false, maxLimit: "5GB" },
        "ULTRA-VIP-PASS-3": { used: false, maxLimit: "5GB" },
        "ULTRA-VIP-PASS-4": { used: false, maxLimit: "5GB" },
        "ULTRA-VIP-PASS-5": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-PRO-MAX": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-ULTIMATE": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-EXCLUSIVE": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-INFINITY": { used: false, maxLimit: "5GB" },
        "HX-SPEECH-GENESIS": { used: false, maxLimit: "5GB" }
    };

    window.HxServerKey = {
        verifyKey: function(keyInput) {
            if (!keyInput) return { success: false, msg: "تکایە کلیل بنووسە!" };
            
            let cleanKey = keyInput.trim();

            let savedActiveKey = localStorage.getItem("hx_active_pro_key");
            if (savedActiveKey === cleanKey) {
                return { success: true, msg: "✓ ئەم کلیلە پێشتر لەسەر ئەم ئامێرە چالاک کراوە!" };
            }

            if (SERVER_KEYS.hasOwnProperty(cleanKey)) {
                if (localStorage.getItem("key_used_" + cleanKey) === "true") {
                    return { success: false, msg: "✕ ببورە، ئەم کلیلە پێشتر لەلایەن کەسێکی ترەوە بەکارهاتووە!" };
                }

                localStorage.setItem("key_used_" + cleanKey, "true");
                localStorage.setItem("hx_active_pro_key", cleanKey);
                return { success: true, msg: "✓ پیرۆزە! بەشی پرۆ (PRO) بە سەرکەوتوویی بۆت کرایەوە." };
            }

            return { success: false, msg: "✕ کلیلەکە هەڵەیە یان بوونی نییە!" };
        },

        isProActive: function() {
            return localStorage.getItem("hx_active_pro_key") !== null;
        }
    };
})();
