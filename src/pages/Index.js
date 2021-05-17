import {useState} from "react"
import {Link} from "react-router-dom"

function Index(props) {

    const loaded = () => {
        return props.entries.map((entry) => (
            <div key={entry._id} className="entry">
                <Link to={`/journal/${entry._id}`}><h1>{entry.title}</h1></Link>
                <h3>By: {entry.name}</h3>
                <h3>Date: {entry.date}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.entries ? loaded() : loading()

}

export default Index