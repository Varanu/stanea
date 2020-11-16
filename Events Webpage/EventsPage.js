import React from "react";

function iframe() {
    return {
        __html: '<div src="./index.html" width="540" height="450"></div>'
    }
}

export default function EventsPage() {
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
}