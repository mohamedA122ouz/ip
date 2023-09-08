import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./map.css";
import mark from "../img/icon-location.svg"
import { Icon } from 'leaflet';
const icon = new Icon({
    iconUrl: mark,
    iconSize: [38, 38]
});
function Map({ centerValue, data }) {
    return (
        <div>
            <div id="map">
                <MapContainer key={centerValue} center={centerValue} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={centerValue} icon={icon}>
                        {
                            data?<Popup>{data}</Popup>:""
                        }
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
export default Map;