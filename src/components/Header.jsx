import PropTypes from 'prop-types';






function Header({ text }) {
  return (
    <header>
        <div className='comtainer'>
          <h2>{text}</h2>
        </div>
  </header>

  )
}

Header.defaultProps = { 
    text: 'Feedback UI',
}

Header.propTypes = { 
    text: PropTypes.string
}

export default Header;