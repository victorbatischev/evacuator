export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='section-title'>
                <h2>Заказать</h2>
                <h3>Хотите заказать эвакуатор? Звоните нам в любое время!</h3>
              </div>
            </div>
            <div className='row'>
              {props.data
                ? props.data.map((d, i) => (
                    <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                      <h5>{d.title}</h5>
                    </div>
                  ))
                : 'Загрузка...'}
            </div>
            <div className='row'>
              <div className='col-xs-12 col-md-12'>
                <a className='phone' href='tel:+7(936)619-98-04'>
                  <i className='fa fa-phone'></i>
                  +7(936)619-98-04
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-md-offset-1 contact-info'>
            <div className='row'>
              <img src='img/contact.jpg' className='img-responsive' alt='' />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </div>
  )
}
