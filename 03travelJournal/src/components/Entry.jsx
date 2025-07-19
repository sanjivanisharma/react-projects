export default function Entry(props) {
    console.log(props)
    
    return (
        <div className="journal-entry">
            <img className="main-img" src={props.img.src} alt={props.img.alt} />
            <div className="details">
                <div className="info-container">
                    <img className="marker" src="src/assets/marker.png" alt="Location Marker" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="trip-dates">{props.dates}</p>
                    <p className="entry-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}