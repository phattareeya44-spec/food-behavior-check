function toggleMenu() {
    const menu = document.getElementById("menu-list");
    menu.classList.toggle("show");
}
function checkResult() {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const answer = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );
        if (answer) {
            score += Number(answer.value);
        }
    }
    const result = document.getElementById("result");
    if (score >= 8) {
        result.innerHTML =
            "🌿 คุณกำลังสร้างสมดุลในการกินได้ดี<br><br>" +
            "ลองรักษาพฤติกรรมที่ดีและเพิ่มความหลากหลายของอาหารต่อไป";
    }
    else if (score >= 5) {
        result.innerHTML =
            "🥗 พฤติกรรมการกินของคุณอยู่ในระดับที่สามารถพัฒนาได้<br><br>" +
            "ลองเพิ่มผัก ผลไม้ และเลือกอาหารให้หลากหลายขึ้น";
    }
    else {
        result.innerHTML =
            "🍎 ลองเริ่มปรับพฤติกรรมการกินทีละเล็กน้อย<br><br>" +
            "เน้นอาหารให้หลากหลายและกินในปริมาณที่เหมาะสม";
    }
}