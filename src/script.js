const quotes = [
    "池袋",
    "大塚",
    "巣鴨",
    "駒込",
    "田端",
    "西日暮里",
    "日暮里",
    "鶯谷",
    "上野",
    "御徒町",
    "秋葉原",
    "神田",
    "東京",
    "有楽町",
    "新橋",
    "浜松町",
    "田町",
    "高輪ゲートウェイ",
    "品川",
    "大崎",
    "五反田",
    "目黒",
    "恵比寿",
    "渋谷",
    "原宿",
    "代々木",
    "新宿",
    "新大久保",
    "高田馬場",
    "目白"

];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}
