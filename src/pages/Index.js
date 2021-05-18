import {useState} from "react"
import {Link} from "react-router-dom"
import DatePicker from "react-date-picker"

function Index(props) {

    const [newForm, setNewForm] = useState({
        name: "",
        title: "",
        date: "",
        entry: ""
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createEntries(newForm)
        setNewForm({
            name: "",
            title: "",
            date: "",
            entry: ""
        })
    }

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

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={newForm.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />
                <DatePicker 
                    onChange={handleChange}
                    value={newForm.date}
                    name="date"
                />
                <input 
                    type="text"
                    value={newForm.entry}
                    name="entry"
                    placeholder="Type Jornal Entry Here..."
                    onChange={handleChange}
                />
                <input type="submit" value="Create Entry" />
            </form>
            {props.entries ? loaded() : loading()}
        </section>
        
    )

}

export default Index