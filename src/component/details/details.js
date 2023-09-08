import "./details.css"

const Details = ({ ip, location, timezone, isp }) => {
    return (
        <div className="detailsContainer">
            <div className='details'>
                <div className='ip Dcontent'>
                    <span className="label">IP ADDRESS</span>
                    <span className="values">{ip}</span>
                </div>
                <div className='location Dcontent'>
                    <span className="label">LOCATION</span>
                    <span className="values">{location}</span>

                </div>
                <div className='timezone Dcontent'>
                    <span className="label">TIMEZONE</span>
                    <span className="values">{("UTC "+timezone)==="UTC loading..."?"loading...":("UTC "+timezone)}</span>

                </div>
                <div className='isp Dcontent'>
                    <span className="label">ISP</span>
                    <span className="values">{isp}</span>

                </div>
            </div>
        </div>
    );
}
export default Details;