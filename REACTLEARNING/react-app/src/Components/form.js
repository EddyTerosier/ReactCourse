import { useState } from "react";
import Item from "./Item";


export default function Form(){
    const [dataArr, setDatArr] = useState([
        {txt: "Promenez le chien"},
        {txt: "Coder"},
        {txt: "Wsh"}
    ])

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose a faire</label>
                <input type="text" className="form-control" id="todo" />
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
                <h2>Liste des choses a faire : </h2>
                <ul className="list-group">
                    {dataArr.map((item,index) => {
                        return (
                            <Item
                            txt={item.txt}
                            key={index}
                            id={index}
                            />
                        )
                    })}
                </ul>
            </form>
        </div>
    )
}