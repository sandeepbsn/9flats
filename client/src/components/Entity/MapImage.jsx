import React from 'react'


export default function MapImage({basicDetails}){
    basicDetails = basicDetails.split(",").join("+")
    return(
        <div className="text-center p-2">
            <iframe
                width="400px"
                height="300px"
                frameborder="0" style={{"border":"0"}}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M&q=${basicDetails}`} allowfullscreen>
            </iframe>
        </div>
    )
}