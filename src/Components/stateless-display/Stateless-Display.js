import React from 'react'

function StateLessDisplay(props) {
    let category = "loading";
if (props.category) {
    category = props.category.title

}
    return(
    <div className = 'display'>
        <strong>Score:</strong>{props.score}
                <strong>Question:</strong>{props.question} <br />
                <strong>Value:</strong> {props.value} <br />
                <strong>Category:</strong> {category} <br />
    </div>
    )
}

export default StateLessDisplay    