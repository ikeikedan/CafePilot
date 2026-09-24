function showRecommend(message) {
  document.body.innerHTML = `
    <div style="text-align:center;margin-top:80px;font-family:sans-serif;">
      <h2>おすすめのお席</h2>

      <h1>${message}</h1>

      <br>

      <button onclick="confirmSeat()"
      style="font-size:24px;padding:15px 40px;">
      この席にする
      </button>

      <br><br>

      <button onclick="goHome()"
　　　　style="font-size:20px;padding:12px 30px;">
          他の席を見る
　　　　</button>

    </div>
  `;
}

function confirmSeat(){
  document.body.innerHTML = `
    <div style="text-align:center;margin-top:80px;">
      <h1>こちらのお席へどうぞ</h1>

      <button onclick="location.reload()"
      style="font-size:24px;padding:15px 40px;">
      最初に戻る
      </button>
    </div>
  `;
}

document.getElementById("one").onclick = () => {
  showRecommend("カウンター①");
};

document.getElementById("two").onclick = () => {
  showRecommend("テーブルA");
};

document.getElementById("three").onclick = () => {
  showRecommend("テーブルC");
};

document.getElementById("five").onclick = () => {
  showRecommend("スタッフをお呼びします");
};
