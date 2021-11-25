import React from 'react';

import logo1 from '../../assets/img/icon/icone1.png';
import logo2 from '../../assets/img/icon/icone2.png';
import logo3 from '../../assets/img/icon/icone3.png';
import '../../assets/css/vantagens.css';

export default function Vantagens() {
    return (
        <div className="wPadrao" id="vantagens">
            <h1 className="title">Vantagens</h1>
            <div className="row">
                <div className="col3">
                    <div className="square">
                        <img width='12' src={logo1} alt="AIS"/>
                    </div>
                    <p className="descSquare">
                        Crie seu design utilizando<br/> nosso modelo e diretrizes de<br/> arte.
                    </p>
                </div>
                <div className="col3">
                    <div className="square">
                        <img width='12' src={logo2} alt="AIS"/>
                    </div>
                    <p className="descSquare">
                        Amplie sua marca com<br/> realidade virtual
                    </p>
                </div>
                <div className="col3">
                    <div className="square">
                        <img width='12' src={logo3} alt="AIS"/>
                    </div>
                    <p className="descSquare">
                        Tecnologia de Realidade<br/> virtual acessivel
                    </p>
                </div>
            </div>
            {/* <button className="btn-square"
                    type="submit"
                    variant="contained">
                comprar agora
            </button> */}
        </div>
    )
}