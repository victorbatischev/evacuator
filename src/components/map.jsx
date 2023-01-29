import { YMaps, Map as YandexMap } from 'react-yandex-maps'

export const Map = (props) => (
  <div id='map'>
    <div className='container'>
      <div className='section-title text-center'>
        <h2>Работаем по югу России</h2>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          {props.data
            ? props.data.slice(0, 9).map((d, i) => <li key={i}>{d}</li>)
            : 'Загрузка...'}
        </div>
        <div className='col-md-4'>
          {props.data
            ? props.data.slice(9, 18).map((d, i) => <li key={i}>{d}</li>)
            : 'Загрузка...'}
        </div>
        <div className='col-md-4'>
          {props.data
            ? props.data.slice(18, 27).map((d, i) => <li key={i}>{d}</li>)
            : 'Загрузка...'}
        </div>
      </div>
      <div className='row'>
        <YMaps>
          <YandexMap
            style={{ paddingTop: 50, height: 500, width: '100%' }}
            defaultState={{ center: [44.994983, 39.805518], zoom: 7 }}
          ></YandexMap>
        </YMaps>
      </div>
    </div>
  </div>
)
