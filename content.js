
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "run_audit") {
    // Performans Verileri
    const navEntry = performance.getEntriesByType("navigation")[0];
    const perfData = {
      loadTime: (navEntry.loadEventEnd - navEntry.startTime).toFixed(2),
      domReady: (navEntry.domContentLoadedEventEnd - navEntry.startTime).toFixed(2),
      domNodes: document.querySelectorAll('*').length
    };

    // Kod ve Arayüz Sorunları
    const issues = [];
    const htmlContent = document.documentElement.innerHTML;
    
    if (htmlContent.includes("console.log")) issues.push("Sayfada console.log aktif bırakılmış.");
    if (document.querySelectorAll('img:not([alt])').length > 0) issues.push("Alt etiketi olmayan resimler var.");
    if (perfData.domNodes > 1500) issues.push("DOM çok derin, performansı düşürebilir.");
    
    const resources = performance.getEntriesByType("resource");
    const largeFiles = resources.filter(r => r.transferSize > 1048576); // 1MB üstü
    if (largeFiles.length > 0) issues.push(largeFiles.length + " adet dosya 1MB'dan büyük.");

    sendResponse({ perfData, issues });
  }
  return true;
});
