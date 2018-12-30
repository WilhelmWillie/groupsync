import style from '../styles/styles.scss'

const Landing = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: style }} />

      <div className='container has-text-centered' style={{padding: '5em 0'}}>
        <h1 className='title is-1'>GroupSync!</h1>

        <div className='field is-grouped' style={{justifyContent: 'center'}}>
          <p className='control'>
            <a className='button is-primary'>Create</a>
          </p>

          <p className='control'>
            <a className='button is-primary'>Join</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing
