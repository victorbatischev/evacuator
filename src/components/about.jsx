export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <img src='img/about.jpg' className='img-responsive' alt='' />
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Эвакуация</h2>
              <p>{props.data ? props.data.paragraph : 'Загрузка...'}</p>
              <div className='list-style'>
                <div>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <h5 key={`${d}-${i}`}>{d}</h5>
                      ))
                    : 'Загрузка...'}
                </div>
                <div>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'Загрузка...'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
