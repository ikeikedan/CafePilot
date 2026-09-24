function showSeat(message) {
  document.body.innerHTML = `
    <div style="text-align:center;margin-top:80px;font-family:sans-serif;">
      <h1>${message}</h1>
      <br><br>
      <button onclick="location.reload()"
        style="font-size:24px;padding:15px 40px;">
        最初に戻る
      </button>
    </div>
  `;
}

document.getElementById("one").onclick = () => {
  showSeat("カウンター①へどうぞ");
};

document.getElementById("two").onclick = () => {
  showSeat("テーブルAへどうぞ");
};

document.getElementById("three").onclick = () => {
  showSeat("テーブルCへどうぞ");
};

document.getElementById("five").onclick = () => {
  showSeat("スタッフをお呼びします");
};
