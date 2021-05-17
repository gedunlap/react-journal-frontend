import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
    const [entries, setEntries] = useState(null)

    const URL = "https://react-journal-backend-gd.herokuapp.com/journal/"

    const getEntries = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setEntries(data)
    }

    const createEntries = async (entry) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        getEntries()
    }

    useEffect(() => getEntries(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index entries={entries} createEntries={createEntries} />
                </Route>
                <Route 
                    path="/journal/:id" 
                    render={(rp) => (<Show {...rp} />)} 
                />
            </Switch>
        </main>
    )
}

export default Main