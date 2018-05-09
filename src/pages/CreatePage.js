import React from 'react'
import Questionnarie from '../components/Questionnarie.js'

const CreatePage = () => {
    return (
        <div>
            <h2>
                Create Questions
            </h2>
            <div className="container">
                <Questionnarie />
            </div>
        </div>
    );
}

export default CreatePage