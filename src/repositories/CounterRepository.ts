import { Counter } from "../models/Counter";

let counter = new Counter(0);

export class CounterRepository {
    get(): Counter {
        return counter;
    }

    updateCount(newValue: Counter){
        counter = newValue;
    }
}

/**
 * ドメインオブジェクト:
 *      ルールを持ったオブジェクト
 *      Counter: 値が0より小さくなってはいけない
 *      TaskTitle: 文字数が１文字以上でなくてはいけない
 * 
 * Repository:
 *      データを保存する場所
 *      Databseが取得できる基本型をServiceで扱うドメインオブジェクトに変換する作業をすることがある。
 * 
 * DataBase: 
 *      データを保存する場所
 *      基本型のみ扱うことができる
 *      -> ドメインオブジェクトは保存できない
 */