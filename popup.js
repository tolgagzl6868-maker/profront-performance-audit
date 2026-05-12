
document.getElementById('scanBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "Analiz ediliyor...";

  chrome.tabs.sendMessage(tab.id, { action: "run_audit" }, (response) => {
    if (!response) {
      resultsDiv.innerHTML = "Lütfen sayfayı yenileyip tekrar deneyin.";
      return;
    }

    let issuesHtml = response.issues.map(i => `<div class='issue'>⚠️ ${i}</div>`).join('');
    
    resultsDiv.innerHTML = `
      <div class='card'>
        <div class='title'>Hız Metrikleri</div>
        <div class='stat'><span>Yükleme Hızı:</span> <span class='value'>${response.perfData.loadTime} ms</span></div>
        <div class='stat'><span>DOM Hazır:</span> <span class='value'>${response.perfData.domReady} ms</span></div>
        <div class='stat'><span>Düğüm (Node):</span> <span class='value'>${response.perfData.domNodes}</span></div>
      </div>
      <div class='card'>
        <div class='title'>Tespit Edilen Sorunlar</div>
        ${issuesHtml || "✅ Sorun bulunamadı!"}
      </div>
    `;
  });
});
