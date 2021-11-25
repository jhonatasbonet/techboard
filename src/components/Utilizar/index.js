import React from 'react';

import Group from '../../assets/img/icon/Group.png';
import Group1 from '../../assets/img/icon/Group (1).png';
import Group2 from '../../assets/img/icon/Group (2).png';
import Group3 from '../../assets/img/icon/Group (3).png';

export default function Utilizar() {
    return (
        <div className="bg-dark" style={{paddingTop: '1em', paddingBottom: '1em'}}>
            <div className="wPadrao">
                <h1 className="title">Como utilizar</h1>
                <div className="row">
                    <div className="como-utilizar">
                        <p className="sub-titulo">
                            videos 360
                        </p>
                        <img src={Group1} alt="Card"/>
                    </div>
                    <div className="como-utilizar">
                        <p className="sub-titulo">
                            Realidade aumentada
                        </p>
                        <img src={Group} alt="Card"/>
                    </div>
                    <div className="como-utilizar">
                        <p className="sub-titulo">
                            Visulizador VR
                        </p>
                        <img src={Group3} alt="Card"/>
                    </div>
                    <div className="como-utilizar">
                        <p className="sub-titulo">
                            Passeios virtuais 3D
                        </p>
                        <img src={Group2} alt="Card"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
