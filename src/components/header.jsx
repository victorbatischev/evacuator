export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-6 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Загрузка...'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Загрузка...'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Заказать эвакуатор
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
