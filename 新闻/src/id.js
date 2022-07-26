import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {

    const { id: noteId } = useParams()

    return (
        <div>
            <h1>detail Note {noteId} </h1>
        </div>
    )
}

export default NotePage