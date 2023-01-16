//vueモジュールからcreateAppメソッドを取り込み
import { createApp } from "vue";
//作成したコンポーネントファイルを取り込み
import App from "./App.vue";

//Vue3のオブジェクトを生成
var app = createApp(App);
//#appの中に組み込み
app.mount("#app");
