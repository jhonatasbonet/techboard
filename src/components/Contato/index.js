import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/contato.css';
import Face from '../../assets/img/icon/logo_face.png';
import Insta from '../../assets/img/icon/logo_insta.png';
import logo from '../../assets/img/logo/logo.png';
import Linkedin from '../../assets/img/icon/logo_link.png';


export default function Contatos() {
    return (
        <div className="wPadrao contato" style={{marginTop: '3em'}}>
            <Link to="/" className="logoais2">
                <img src={logo} alt="Logo AIS" style={{width: '25em'}}/>
            </Link>
            <div className="end">
                <p>301 Av Tancredo Neves</p>
                <p>Foz do iguaçu, Parana</p>
                <p>+55 (45) -99149-3712</p>
            </div>

            <div className="sociais">
                <a href="https://www.facebook.com/ambientesvirtuaisais" target="blanck" className="face">
                    <img width='12' style={{marginRight:'0.5em', marginTop: '1em'}} src={Face} alt="Facebook AIS"/>
                </a>
                <a href="https://www.instagram.com/industryais/" target="blanck" className="insta">
                    <img width='20' src={Insta} alt="Instagram AIS"/>
                </a>
                <a href="https://www.linkedin.com/company/ais-ambientesvirtuais/" target="blanck" className="linke">
                    <img width='20' style={{ marginBottom: '1em'}}  src={Linkedin} alt="Linkedin AIS"/>
                </a>
            </div>
        </div>
    )
}