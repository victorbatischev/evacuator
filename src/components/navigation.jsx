export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Услуги автопомощи на дороге
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Преимущества
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Эвакуация
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Техпомощь
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Заказать
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
