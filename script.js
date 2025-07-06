const qrcodeContainer = document.getElementById('qrcode');

QRCode.toCanvas(targetURL, { width: 200 }, function (error, canvas) {
    if (error) {
        console.error(error);
        return;
    }
    qrcodeContainer.appendChild(canvas); // QR 코드 캔버스를 중앙 div에 추가
});