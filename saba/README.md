# 時間をサバく鯖bot

指定した時間に鯖がつぶやくSlackのbotです。

## Description

スクリプト上のスケジュールに従ってSlackに投稿を行います。  
言語はGoogle Apps Scriptです。  
また、たまーに鯖がぼやきます。  
  
Google Apps Scriptのトリガーで時間指定ができないため、1分ごとに動かしスケジュールをチェックするような処理となっております。

## Usage

* 鯖に投稿させたいチームのSlackを開き、左側メニューの「Apps & integrations」を押下します。
* 「Incoming WebHooks」を検索し、新規作成でWebhook URLを取得します。
* `Bot/sabaBot.gs`の変数urlにWebhook URLを設定します。
```
function postSlack(payload) {
  // POST先
  var url = "POST先URLを設定してください";
```
* `Bot/sabaBot.gs`にbot名や投稿先チャンネルを設定します。
```
function postSlack(payload) {
function createPayloadBase(text) {
  var payload = {
    "username" : "時間をサバく鯖bot",
    "icon_emoji": "", // アイコン画像はslack側の設定を使用
    "channel" : "#saba",
    "text" : text
  };
```
* Googleドライブを開き、右クリック→「その他」→「アプリを追加」で「Google Apps Script」を追加します。
* Googleドライブの任意のディレクトリを開き、右クリック→「その他」→「Google Apps Script」で編集画面を開きます。
* `Bot/sabaBot.gs`の内容を全てコピーし、編集画面にペーストします。
* 上部メニュー「リソース」→「現在のプロジェクトのトリガー」よりトリガーを作成します。  
`myFunction`をイベント「時間主導型」で1分ごとに実行するよう設定します。
* スクリプトを保存します。
* 投稿されるまで待ちましょう！


## Install

```console
$ git clone https://github.com/szkayeah/Bot.git
```

## Author

[szkayeah](https://github.com/szkayeah)
