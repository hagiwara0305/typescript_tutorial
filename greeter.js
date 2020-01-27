// 変数に型を与えて宣言。
var onigiri = 'onigiri', // String型
calories = 'test'; // Number型
// 関数の仮引数にも受け入れる型を定義。
// {}の前にあるstringは関数の返す値の型を定義している。
function todaysMeal(food, energy) {
    return "My " + food + " has " + energy + " calories";
}
todaysMeal(onigiri, calories);
