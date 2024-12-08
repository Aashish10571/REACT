import picture from './assets/react.svg'

function card() {
    return(
        <div className="card">
            <img src={picture} alt="img" className='card-image' />
            <h2 className='card-title'>Aashish Moktan</h2>
            <p className='card-text'>I made this website using React Js.</p>
        </div>
    )
}

export default card
