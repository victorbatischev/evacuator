import { YMaps, Map as YandexMap, Placemark } from 'react-yandex-maps'

export const Map = () => (
  <div id='map'>
    <div className='container'>
      <div className='section-title text-center'>
        <h2>Работаем по югу России</h2>
      </div>
      <div className='row'>
        <YMaps>
          <YandexMap
            style={{ height: 300, width: '100%' }}
            defaultState={{ center: [47.994983, 37.805518], zoom: 16 }}
          >
            <Placemark
              defaultGeometry={[47.994983, 37.805518]}
              properties={{ iconCaption: 'Эвакуатор' }}
            />
          </YandexMap>
        </YMaps>
      </div>
    </div>
  </div>
)
