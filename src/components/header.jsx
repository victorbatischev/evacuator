export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Загрузка...'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Загрузка...'}</p>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Заказать эвакуатор
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-md-12'>
                <a className='phone' href='tel:+7(977)099-85-05'>
                  <i className='fa fa-phone'></i>
                  +7 (977) 099-85-05
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
