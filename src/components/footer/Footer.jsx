import './../footer/footer.css'
import mainMenu from './../../image/main_menu.svg'
import camera from './../../image/camera.svg'
import acc from './../../image/acc.svg'


function Footer() {
    return (
        <footer className="footer">
            <div className="container__mobail">
                <ul className="footer__menu">
                    <li className="menu__element">
                        <a href="" className="main__menu">
                            <img src={mainMenu} alt="" className="main__menu-img" />
                        </a>    
                    </li>
                    <li className="menu__element">
                        <a href="" className="camera__menu">
                            <img src={camera} alt="" className="camera__menu-img" />
                        </a>
                    </li>
                    <li className="menu__element">
                        <a href="" className="account__menu">
                            <img src={acc} alt="" className="account__menu-img" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export { Footer };