import { YMaps, Map as YandexMap } from 'react-yandex-maps'

export const Map = (props) => (
  <div id='map'>
    <div className='container'>
      <div className='section-title text-center'>
        <h2>Работаем по России</h2>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          {props.data
            ? props.data.slice(0, 4).map((d, i) => <li key={i}>{d}</li>)
            : 'Загрузка...'}
        </div>
        <div className='col-md-4'>
          {props.data
            ? props.data.slice(4, 8).map((d, i) => <li key={i}>{d}</li>)
            : 'Загрузка...'}
        </div>
        <div className='col-md-4'>
          {props.data
            ? props.data.slice(8, 14).map((d, i) => <li key={i}>{d}</li>)
            : 'Загрузка...'}
        </div>
      </div>
      <div className='row'>
        <YMaps>
          <YandexMap
            style={{ paddingTop: 50, height: 500, width: '100%' }}
            defaultState={{ center: [53.2522, 45.6156], zoom: 5 }}
          ></YandexMap>
        </YMaps>
      </div>
    </div>
  </div>
)
