import "./style.css"; // ここで読み込めば、このファイルで読み込むコンポーネントにも反映される
// stateをつかうとき
import { useState } from "react";

export const Top = ()=>{
    // stste定義
    // 未完了の初期値
    const [incompoleteTodos, setIncompoleteTodos] = useState(["todo1","todo2","todo3"]);
    // 完了の初期値
    const [compoleteTodos, setCompoleteTodos] = useState(["todo3","todo4"]);
    // 入力値の状態
    
    return (
        <>
        <div className="input-area">
            <input type="text" name="" id="" placeholder="todo"/>
            <button>Add</button>
        </div>
        <div className="incomplete-area">
            <p className="title">未完了</p>
            <ul>
                {/* 未完了のリストをループで返す */}
                {incompoleteTodos.map((todo)=>{
                    return (
                        // 一位となるkeyを設定しないとwarning
                        // 単一要素を返しているので{},returnはいらない
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className="complete-area">
            <p className="title">完了</p>
            <ul>
                {/* 完了のリストをループで返す */}
                {compoleteTodos.map((todo)=>{
                    return (
                        // 一位となるkeyを設定しないとwarning
                        // 単一要素を返しているので{},returnはいらない
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button>戻す</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
        
        </>
    )
}