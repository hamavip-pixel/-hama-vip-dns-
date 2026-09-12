window.HxServerKey = {
    keys: {
        "HAMA-VIP-001": true, "HAMA-VIP-002": true, "HAMA-VIP-003": true, "HAMA-VIP-004": true, "HAMA-VIP-005": true,
        "HAMA-VIP-006": true, "HAMA-VIP-007": true, "HAMA-VIP-008": true, "HAMA-VIP-009": true, "HAMA-VIP-010": true,
        "HAMA-VIP-011": true, "HAMA-VIP-012": true, "HAMA-VIP-013": true, "HAMA-VIP-014": true, "HAMA-VIP-015": true,
        "HAMA-VIP-016": true, "HAMA-VIP-017": true, "HAMA-VIP-018": true, "HAMA-VIP-019": true, "HAMA-VIP-020": true,
        "HAMA-VIP-021": true, "HAMA-VIP-022": true, "HAMA-VIP-023": true, "HAMA-VIP-024": true, "HAMA-VIP-025": true,
        "HAMA-VIP-026": true, "HAMA-VIP-027": true, "HAMA-VIP-028": true, "HAMA-VIP-029": true, "HAMA-VIP-030": true,
        "HAMA-VIP-031": true, "HAMA-VIP-032": true, "HAMA-VIP-033": true, "HAMA-VIP-034": true, "HAMA-VIP-035": true,
        "HAMA-VIP-036": true, "HAMA-VIP-037": true, "HAMA-VIP-038": true, "HAMA-VIP-039": true, "HAMA-VIP-040": true,
        "HAMA-VIP-041": true, "HAMA-VIP-042": true, "HAMA-VIP-043": true, "HAMA-VIP-044": true, "HAMA-VIP-045": true,
        "HAMA-VIP-046": true, "HAMA-VIP-047": true, "HAMA-VIP-048": true, "HAMA-VIP-049": true, "HAMA-VIP-050": true,
        "HAMA-VIP-051": true, "HAMA-VIP-052": true, "HAMA-VIP-053": true, "HAMA-VIP-054": true, "HAMA-VIP-055": true,
        "HAMA-VIP-056": true, "HAMA-VIP-057": true, "HAMA-VIP-058": true, "HAMA-VIP-059": true, "HAMA-VIP-060": true,
        "HAMA-VIP-061": true, "HAMA-VIP-062": true, "HAMA-VIP-063": true, "HAMA-VIP-064": true, "HAMA-VIP-065": true,
        "HAMA-VIP-066": true, "HAMA-VIP-067": true, "HAMA-VIP-068": true, "HAMA-VIP-069": true, "HAMA-VIP-070": true,
        "HAMA-VIP-071": true, "HAMA-VIP-072": true, "HAMA-VIP-073": true, "HAMA-VIP-074": true, "HAMA-VIP-075": true,
        "HAMA-VIP-076": true, "HAMA-VIP-077": true, "HAMA-VIP-078": true, "HAMA-VIP-079": true, "HAMA-VIP-080": true,
        "HAMA-VIP-081": true, "HAMA-VIP-082": true, "HAMA-VIP-083": true, "HAMA-VIP-084": true, "HAMA-VIP-085": true,
        "HAMA-VIP-086": true, "HAMA-VIP-087": true, "HAMA-VIP-088": true, "HAMA-VIP-089": true, "HAMA-VIP-090": true,
        "HAMA-VIP-091": true, "HAMA-VIP-092": true, "HAMA-VIP-093": true, "HAMA-VIP-094": true, "HAMA-VIP-095": true,
        "HAMA-VIP-096": true, "HAMA-VIP-097": true, "HAMA-VIP-098": true, "HAMA-VIP-099": true, "HAMA-VIP-100": true,
        "HX-SPEECH-GENESIS": true,
        "MATRIX-PRO-2026": true
    },

    verifyKey: function(keyInput) {
        keyInput = keyInput.trim();

        if (!this.keys[keyInput]) {
            return { success: false, message: "کلیلەکە هەڵەیە!" };
        }

        let usedKeys = JSON.parse(localStorage.getItem('hama_used_keys') || '{}');
        
        if (usedKeys[keyInput]) {
            return { success: false, message: "⚠️ ئەم کلیلە پێشتر بەکارهاتووە و بەسەرچووە! تکایە کلیلی نوێ داوا بکە." };
        }

        usedKeys[keyInput] = true;
        localStorage.setItem('hama_used_keys', JSON.stringify(usedKeys));

        return { success: true, message: "کلیلەکە ڕاستە و بە سەرکەوتوویی چالاک بوو!" };
    }
};
