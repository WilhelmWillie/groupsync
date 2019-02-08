import style from '../styles/styles.scss'

import Link from 'next/link'

const Landing = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: style }} />

      <div className='container has-text-centered' style={{padding: '5em 0'}}>
        <h1 className='title is-1'>GroupSync!</h1>

        <div className='field is-grouped' style={{justifyContent: 'center'}}>
          <p className='control'>
            <Link href='/create'>
              <a className='button is-primary'>Create</a>
            </Link>
          </p>

          <p className='control'>
            <Link href='/join'>
              <a className='button is-primary'>Join</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing
