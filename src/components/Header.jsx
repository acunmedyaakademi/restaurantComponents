import logo from '/images/logo.png'

export default function Header(){
    return(
        <>
            <header className="header">
                <div className="containers">
                    <div className="main-menu">
                        <div className="logoCont">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-menu">
                            <ul className='navs'>
                                <li>Hizmetler</li>
                                <li>İletişim</li>
                            </ul>
                        </div>
                        <div className="menu-btn">
                            <button className="basket">Sepet</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}