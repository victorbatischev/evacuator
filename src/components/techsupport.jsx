export const TechSupport = (props) => {
  return (
    <div id='techsupport' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Техпомощь</h2>
          <p className='text-center'>
            Перечень стандартных работ и услуг, выполняемых Службой техпомощи:
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <img src={d.img} alt='' />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'Загрузка...'}
        </div>
      </div>
    </div>
  )
}
