/**
 * const,let等の変数宣言
 */
//  var val1 = "var変数";
//  console.log(val1);
//  //var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);
//  //再宣言も可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// //let 上書き可能
// val2 = "let　上書き";
// console.log(val2);
// //let 再宣言は不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// //const 上書き、再宣言は不可能
// val3 = "const変数の上書き";
// // const val3 = "const変数の上書き";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "haruki",
//   age: 35,
// };
// val4.name = "haru";
// val4.addres = "hiroshima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "haruki";
// const age = 35;

// //従来の方法 結合の度に + が必要
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数  func1は関数名　(カッコ内は引数)
 */
// 方法１
// function func1(str) {
//   return str;
// }
// 方法２
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

//　アロー関数 functionは記述しなくても(引数)

// 引数が１つの場合引数のカッコを省略できる。でも保存すると整形ツールがカッコをつけてくれる
// const func2 = str => {}

//　　中の処理が１行で終わる場合の省略した書き方　returnが省略できる
// const func2 = (str) => str;

// const func2 = (str) => {
//   //処理内容
//   return str;
// }
// console.log(func2("func2です"));

// // 足し算の処理を書いてみる
// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };

// // returnが省略できる
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));
