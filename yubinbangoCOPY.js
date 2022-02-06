var t=[],YubinBango;

// L.88に引数記載、YubinBangoがあればそれを、なければ{}を入れる
!function(YubinBango){
  // console.log('これはページ読み込んだタイミングで発動してる')
  var n = function(){
    /**
     * 後半formのfocus/keyupで発動する関数
     * @param {string} t // フォームの入力値
     * @param {function} n // これなに？？
     */
    function n(t,n){
      if(void 0 === t && (t = ""),
        this.URL="https://yubinbango.github.io/yubinbango-data/data",
        this.g=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],
        t
      ){
        // 全角数字を半角数字に変換する処理
        var e = t.replace(/[０-９]/g, function(t){
          return String.fromCharCode(t.charCodeAt(0)-65248)
          /* メモ
            入力が正常だった場合、1文字目のUTF-16文字コードを取得??
            全角数字の場合は-65248をすると半角の数字と一致する(全角→半角 変換)
          */
        });

        // console.log(e) // これは入力された数値を半角にしたもの(数値以外は無視される)

        var r = e.match(/\d/g);
        // console.log(r) // これは半角にした入力から数値のみ抽出したもの(数値以外はここで排除される)

        var o = r.join("");
        // console.log(o) // これは抽出した数値一文字ずつを結合したもの

        // メモ: thisはスコープ内関数のn(URL、gが格納されている)
        // hは↓のreturnにあるもの
        var i = this.h(o); // tが7桁の場合はそれを返す、それ以外の場合は何も返ってこない(null)

        i ? this.i(i,n) : n(this.j()) // tが7桁ですか、7ならxxx、違うならxxxを返す
      }
      // console.log(this)
    }
    return n.prototype.h = function(t){
      if(7 === t.length) {
        return t
      }
    },
    n.prototype.j = function(t,n,e,r,o){
      return void 0 === t && (t=""),void 0 === n && (n=""),void 0 === e && (e=""),void 0 === r && (r=""),void 0 === o && (o=""),{k:t,region:n,l:e,m:r,o:o}
    },
    n.prototype.p = function(t){
      // console.log(this.g); // ここで都道府県一覧はとれる
      return t && t[0] && t[1] ? this.j(t[0],this.g[t[0]],t[1],t[2],t[3]) : this.j()
    },
    n.prototype.q = function(t,n){
      window.$yubin = function(t){
        return n(t)
      };
      var e = document.createElement("script");
      e.setAttribute("type","text/javascript"),
      e.setAttribute("charset","UTF-8"),
      e.setAttribute("src",t),
      document.head.appendChild(e)
    },
    n.prototype.i = function(n,e){
      // console.log(n) // 7桁の数字
      
      var r = this; // thisはスコープ内関数のn(URL、gが格納されている)
      // console.log(r) // スコープ内関数のn(URL、gが格納されている)
      
      var o = n.substr(0,3); // 頭から3桁切り出し
      // console.log(o) // 郵便番号の前半3桁

      // console.log(t) // 検索結果の多次元配列(なぜかfocusoutでは発動しないけどボタン押下ではちゃんと入ってる)
      // console.log(o in t) // 検索結果[前半3桁] が存在するか
      // console.log(n in t[o]) //↑がある状態で この配列[郵便番号] が存在するか = 郵便番号の妥当性
      
      /* 分からないこと
      console.log(e)
      console.log(this.p)
      console.log(this.q)
      */
      return o in t && n in t[o] ? e(this.p(t[o][n])) : void this.q(this.URL+"/"+o+".js",function(i){return t[o]=i,e(r.p(i[n]))})
    },
    n // 結果ここのnしか返ってきてない
  }();
  // console.log(n); // L.11の function(t,n) {} が入っている??
  YubinBango.Core = n
}(YubinBango||(YubinBango={}));

var n = ["Japan","JP","JPN","JAPAN"];
var e = ["p-region-id","p-region","p-locality","p-street-address","p-extended-address"];
var YubinBango;

// L.165あたりに引数記載、YubinBangoがあればそれを、なければ{}を入れる けど上の即時実行関数でYubinBango.coreに関数が入ってるかも(iとかjとかそういう関数も入ってる)
!function(YubinBango){
  // console.log(YubinBango) // これは上の即時実行関数でYubinBango.coreに入った関数が表示(iとかjとかそういう関数も入ってる)
  var t = function(){
    function t(){
      // console.log(this.s) // これはすぐ下で定義されている関数
      this.s()
    }
    return t.prototype.s = function(){
      var n = this; // t{}
      var e = document.querySelectorAll(".h-adr"); // form.h-adr
      [].map.call(e,function(e){ // .call() でnodeListをArrayとして呼び出す
        // console.log(e) // これは変わらず form.h-adr
        // console.log(n.t(e))

        if(n.t(e)){ // フォーム内に指定されている国指定が JAPANである場合
          var r = e.querySelectorAll(".p-postal-code");
          // console.log(r) // これは郵便番号フォーム(今回は2つ)
          r[r.length-1].addEventListener("keyup",function(e){ // 最後のフォームにkeyupイベントが発生した時
            
            // console.log(n.v(e.target.parentNode)); // これはform.h-adr
            t.prototype.u(n.v(e.target.parentNode))
          },!1) // 第三引数がfalseのときはイベント発火要素から上に向かっていくイメージ?? https://note.affi-sapo-sv.com/js-addeventlistener-usecapture.php#title2
        }
      })
    },
    // (引数の親要素)かつ(formタグまたは.h-adrを持つ要素)を返却
    t.prototype.v = function(t){
      /*
      最初のtには「最後の郵便番号フォームの親要素」が入るのでdivが入っている
      → divタグが入るから初めの条件の "FORM" === t.tagName には当てはまらない
      → そのdivはh-adrクラスを持ってないので返り値がtにもならない
      → もう一回この関数に入る(divの親要素で判定)
      → divの親がform.h-adrなのでtを返す
      */
      return "FORM" === t.tagName || t.classList.contains("h-adr") ? t : this.v(t.parentNode)
    },
    // 国がJAPANか判定
    t.prototype.t = function(t){
      var e = t.querySelector(".p-country-name");
      var r = [e.innerHTML, e.value];
      // console.log(r) // フォームにhiddenで入れている国名の値
      // console.log(n) // これはL.89で定義されたもの

      // e.innerHTML か e.value に nのどれかが入っているか
      // つまり、国がJAPANか判定する
      return r.some(function(t){return n.indexOf(t)>=0})
    },
    t.prototype.u = function(t){
      // console.log(t) // これは form.h-adr
      var n = this; // これはt(A,B,C,Dとかの関数が入ってる)
      var e = t.querySelectorAll(".p-postal-code"); // 郵便番号フォームの抽出

      // console.log(YubinBango.Core) // nを入れてたから L.12以降のfunction
      // console.log(this.A(e)) // 郵便番号

      new YubinBango.Core(this.A(e), function(e){return n.B(t, e)}) // function(e){} のは関数定義なので、eには何か入ってるわけじゃない(tは入ってる)??、何が入っているのかなあ検索結果が入ってるぽいけど
    },
    // フォームの値を結合して返却
    t.prototype.A = function(t){
      // console.log(t) // これは郵便番号のフォーム
      return [].map.call(t, function(t){
        // console.log(t.value) // これはフォームごとの値
        return t.value
      }).reduce(function(t,n){
        // console.log(t); // これは今までの総和
        // console.log(n); // これは今の値
        return t + n; // 順番に合計(今回はStringなので結合)しているイメージ
      })
    },
    t.prototype.B = function(t, n){
      // console.log(t) // form.h-adr
      // console.log(n) // L.90あたりの p- クラスリスト

      var r = [this.C, this.D];

      /*
      Cの関数に対して各クラスごとに関数発動
        (各住所フォームを空にする)
      → 終わったらDの関数に対して各クラスごとに関数発動
        (各住所を結合する)
      */
      r.map(function(r){
        return e.map(
          function(e){
            // console.log(e) // クラスリスト1つずつ
            return r(e, t, n)
          }
        )
      })
    },
    // 各フォームの値を空にする??
    t.prototype.C = function(t,n,e){
      // console.log(t) // これはクラス名
      // console.log(n) // これは form.h-adr
      // console.log(e) // これは検索結果??
      if(e){
        var r = n.querySelectorAll("." + t);
        // console.log(r); // これは都道府県とかのinput
        [].map.call(r, function(t){
          // console.log(t) // これも都道府県とかのinput(複数ある場合は順番に)
          return t.value = ""
        })
      }
    },
    t.prototype.D = function(t,n,e){
      // console.log(t) // これはクラス名
      // console.log(n) // これは form.h-adr
      // console.log(e) // これは検索結果??

      var r = {
        "p-region-id" : e.k,
        "p-region" : e.region,
        "p-locality" : e.l,
        "p-street-address" : e.m,
        "p-extended-address" : e.o
      };
      // console.log(r) // 検索結果をクラス名と連携させる

      var o = n.querySelectorAll("." + t);
      // console.log(o) // これは都道府県とかのinput

      // 検索結果の結合
      [].map.call(o, function(n){
        // console.log(n) // これも都道府県とかのinput(複数ある場合は順番に)
        return n.value += r[t] ? r[t] : ""
      })
    },
    t
  }();
  YubinBango.MicroformatDom = t
}(YubinBango||(YubinBango={}));
document.addEventListener("DOMContentLoaded",function(){new YubinBango.MicroformatDom},!1);
