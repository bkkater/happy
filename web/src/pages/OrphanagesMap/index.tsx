import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import '../../styles/global.css'
import './styles.css'
import 'leaflet/dist/leaflet.css'

import mapMarker from '../../assets/map-marker.svg'


const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function OrphanagesMap() {
    return (
        <div id='page-map'>
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Macaé</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map
                center={[-22.3862896, -41.7904943]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}

            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                    icon={mapIcon}
                    position={[-22.3862896, -41.7904943]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                        Lar das Meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color='#FFF'/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to='/orphanage/create' className='create-orphanage'>
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;