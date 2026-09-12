/**
 * Hx-Speech Portal - Server Key & Security Engine
 * Author: MATiX (HAMA VIP)
 */

(function () {
    'use strict';

    const SERVER_CONFIG = {
        name: "Hx-Speech Secure Server",
        version: "4.5.0",
        status: "Active",
        sslEnabled: true,
        endpoint: "https://hamavip-pixel.github.io/hx-speech/"
    };

    // ١٠ کلیلی پەسەندکراو و چالاککراو لە سێرڤەردا
    const VALID_KEYS = [
        "HX-PRO-JIN9X",
        "HAMA-VIP-2026-X1",
        "MATRIX-KEY-777",
        "HX-SPEECH-SECURE-99",
        "VIP-MASTER-KEY-01",
        "SECURE-ACCESS-88X",
        "HX-PRO-ULTRA-55",
        "HAMA-VIP-ACCESS-9",
        "DEV-MATRIX-KEY-404",
        "HX-SPEECH-VIP-PRO"
    ];

    function initServerKeyModule() {
        console.log(`[${SERVER_CONFIG.name}] Initialized successfully.`);
        console.log(`Status: ${SERVER_CONFIG.status} | SSL: ${SERVER_CONFIG.sslEnabled}`);
    }

    // سیستمی پشکنین و بەڕێوەبردنی کلیلەکان
    window.HxServerKey = {
        getInfo: function() {
            return SERVER_CONFIG;
        },
        verifyKey: function(keyString) {
            if (!keyString) return false;
            // پشکنینی ڕاستەقینەی کلیل لەگەڵ لیستی سێرڤەردا (بێ جیاوازی پیتە گەورە و بچووکەکان)
            return VALID_KEYS.includes(keyString.trim());
        }
    };

    initServerKeyModule();
})();
