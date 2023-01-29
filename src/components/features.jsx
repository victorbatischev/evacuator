export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4'>
                  <img src={d.img} alt='' />
                  <h3>{d.title}</h3>
                  <br></br>
                </div>
              ))
            : 'Загрузка...'}
        </div>
      </div>
    </div>
  )
}
