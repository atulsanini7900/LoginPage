import "./brand.css"
function MyNav () {
    return ( 
        <>
        <nav>
                    <div className="logo">
                        <img className="myimage" src="/images/brand_logo.png" alt="brand" />

                    </div>
                    <ul>
                        <li href='#'>Menu</li>
                        <li href='#'>Location</li>
                        <li href='#'>About</li>
                        <li href='#'>Contact</li>
                    </ul>
                    <button>Login</button>
                </nav>
        </>
     );
}

export default MyNav ;