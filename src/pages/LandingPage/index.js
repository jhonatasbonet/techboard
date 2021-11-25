import React from 'react';
import Navbar from '../../components/Navbar/index';
import Banner from '../../components/Banner/index';
import Caracteristicas from '../../components/Caracteristicas/index';
import Vantagens from '../../components/Vantagens/index';
import Utilizar from '../../components/Utilizar/index';
import QuemSomos from '../../components/QuemSomos/index';
import Contato from '../../components/Contato/index';

export default function Landing() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Caracteristicas/>
            <Vantagens/>
            <Utilizar/>
            <QuemSomos/>
            <Contato/>
        </>
    );
}