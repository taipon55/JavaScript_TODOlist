// ボタンをクリックするとテキストボックスに入力された値を取得し出力する。valueをつけないとinputelementが返される。
function button_Push() {
  todo.innerHTML = add_text.value;
}

let add_text = document.querySelector("#nameText");
let todo = document.querySelector("#output");

let click_button = document.querySelector(".click_button");
click_button.addEventListener("click", button_Push);
