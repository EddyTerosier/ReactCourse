import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";


export default function Form(){
    const [dataArr, setDatArr] = useState([
        {txt: "Promenez le chien", id: uuidv4()},
        {txt: "Coder", id: uuidv4()},
        {txt: "Wsh", id: uuidv4()}
    ])

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDatArr(filteredState)
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose a faire</label>
                <input type="text" className="form-control" id="todo" />
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
                <h2>Liste des choses a faire : </h2>
                <ul className="list-group">
                    {dataArr.map((item) => {
                        return (
                            <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                            />
                        )
                    })}
                </ul>
            </form>
        </div>
    )
}