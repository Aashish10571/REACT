type fruit = {
    id: number
    name: string
    calories: number

}

type propsObj = {
    items: fruit[]
    category: string
}

function list(props: propsObj) {
    const category = props.category;
    const itemLists = props.items;

    const listItems = itemLists.map(itemList => (<li key={itemList.id}>
                                                {itemList.name} &nbsp;
                                                <b>{itemList.calories}</b>
                                          </li>));

    return(
        <div className="m-4 p-6 bg-slate-200 rounded-xl font-serif flex flex-col gap-4">
            <h3 className="text-4xl text-center font-extrabold leading-relaxed capitalize border border-black rounded-xl">{category}</h3>
            <ul className="text-lg capitalize flex flex-col gap-3">{listItems}</ul>
        </div>
    )
}

export default list
