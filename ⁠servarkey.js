/**
 * Hx-Speech Portal - Server Key & Security Script
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

    function initServerKeyModule() {
        console.log(`[${SERVER_CONFIG.name}] Initialized successfully.`);
        console.log(`Status: ${SERVER_CONFIG.status} | SSL: ${SERVER_CONFIG.sslEnabled}`);
    }

    // تاقیکردنەوەی پەیوەندی و کارپێکردنی سێرڤەر
    window.HxServerKey = {
        getInfo: function() {
            return SERVER_CONFIG;
        },
        verifyKey: function(keyString) {
            if (!keyString) return false;
            return keyString.startsWith("HAMA-VIP-");
        }
    };

    initServerKeyModule();
})();
