import List from './list.tsx'

type food = {
    id: number
    name: string
    calories: number
}

function App() {
    const fruits: food[] = [
        {id: 1, name: 'apple', calories: 95},
        {id: 2, name: 'orange', calories: 45},
        {id: 3, name: 'banana', calories: 105},
        {id: 4, name: 'coconut', calories: 159},
        {id: 5, name: 'pineapple', calories: 37}
    ]

    const vegetable: food[] = [
        {id: 6, name: 'potato', calories: 110},
        {id: 7, name: 'celery', calories: 15},
        {id: 8, name: 'corn', calories: 63},
        {id: 9, name: 'carrot', calories: 25},
        {id: 10, name: 'broccoli', calories: 50}
    ]

    return(
        <>
            <List items = {fruits} category = "fruits"/>
            <List items = {vegetable} category = "vegetable"/>
        </>
    )
}

export default App
