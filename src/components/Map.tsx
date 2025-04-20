import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  const position: any = [50.021944981215206, 15.208460463844917];

  return(
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>
          Akademie mýtických postav
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
