import React from 'react';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import card1 from '../../assets/img/card1.png';
import card2 from '../../assets/img/card2.png';
import card4 from '../../assets/img/card4.png';
import '../../assets/css/Input.css';
import '../../assets/css/banner.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                quantity: '',
                telephone: '',
                email: '',
                accept: ''

            },
            errors: {},
            message: '',
            status: '',
            dis: false
        };


    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    changeMessage = () => {
        this.setState({
            message: '',
            status: '',
            fields: {
                name: '',
                quantity: '',
                telephone: '',
                email: '',
                accept: ''
            }
        })
    }

    handleSend() {
        let formData = new FormData();
        this.setState({ dis: true })

        formData.append("name", this.state.fields.name);
        formData.append("quantity", this.state.fields.quantity);
        formData.append("telephone", this.state.fields.telephone);
        formData.append("email", this.state.fields.email);
        formData.append("accept", this.state.fields.accept);

        if (this.handleValidation()) {
            axios({
                url: "http://email.ambientesvirtuais.com/",
                method: "POST",
                headers: {
                    authorization: "fEqgMxBhnwMPhppEN89kVOi5Y6Dr1dtuR96yHAmCXw6YIB2",
                    'Content-Type': 'application/json'
                },
                data: formData,
            })
                .then((res) => {
                    this.setState({
                        message: res.data.message,
                        status: res.data.status,

                    })
                    if (res.data) {
                        setInterval(this.changeMessage, 2000);
                    }
                })
                .catch((err) => { console.log(err + ' teste') });

            this.setState({ dis: false })
        } else {
            this.setState({ dis: false })
        }




    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"] || fields["name"] === '') {
            formIsValid = false;
            errors["name"] = "O campo ser vazio";
        }

        //quantity
        if (!fields["quantity"] || fields["quantity"] === '') {
            formIsValid = false;
            errors["quantity"] = "O campo ser vazio";
        } else if (typeof fields["quantity"] !== "undefined") {
            if (!fields["quantity"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["quantity"] = "Somente números";
            }
        }

        //Email
        if (!fields["email"] || fields["email"] === '') {
            formIsValid = false;
            errors["email"] = "O campo ser vazio";
        } else if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "E-mail precisa ser valido";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    render() {
        return (
            <div className="bg-dark fundocotacao">
                <div className="wPadrao fundocotacao">
                    <Carousel width={730} autoPlay={true} showStatus={false}>
                        <div>
                            <img src={card1} alt="AIS – Ambientes Virtuais" />
                        </div>
                        <div>
                            <img src={card4} alt="AIS – Ambientes Virtuais" />
                        </div>
                        <div>
                            <img src={card2} alt="AIS – Ambientes Virtuais" />
                        </div>
                    </Carousel>
                    <form className="form">
                        <h2>Eu quero uma Cotação!</h2>

                        {
                            this.state.message !== '' ?
                                this.state.status
                                    ? <div class="alerta sucesso">{this.state.message}</div>
                                    : <div class="alerta error">{this.state.message}</div>
                                : ''
                        }
                        <>
                            <label htmlFor="inp" className="inp">
                                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                <input type="text" id="name" name="name" placeholder="&nbsp;" required value={this.state.fields.name} onChange={this.handleChange.bind(this, "name")} />
                                <span className="label">Nome</span>
                                <span className="focus-bg" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <span style={{ color: "red" }}>{this.state.errors["quantity"]}</span>
                                <input type="number" id="quantity" name="quantity" placeholder="&nbsp;" required value={this.state.fields.quantity} onChange={this.handleChange.bind(this, "quantity")} />
                                <span className="label">Quantidade min 500+</span>
                                <span className="focus-bg" />
                            </label>

                            <label htmlFor="inp" className="inp">
                                <input type="text" id="telephone" name="telephone" placeholder="&nbsp;" required value={this.state.fields.telephone} onChange={this.handleChange.bind(this, "telephone")} />
                                <span className="label">Telefone</span>
                                <span className="focus-bg" />
                            </label>

                            <label htmlFor="inp" className="inp">
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                <input type="email" id="email" name="email" placeholder="&nbsp;" required value={this.state.fields.email} onChange={this.handleChange.bind(this, "email")} />
                                <span className="label">E-mail</span>
                                <span className="focus-bg" />
                            </label>

                            <div style={{ flexDirection: 'row' }}>
                                <input type="checkbox" id="accept" name="accept" required checked={this.state.fields.accept} onChange={this.handleChange.bind(this, "accept")} />
                                <label htmlFor="vehicle1">Aceito receber informações sobre o produto.</label>
                            </div>
                        </>

                        <button className="btn"
                            type="button"
                            variant="contained"
                            disabled={this.state.dis}
                            onClick={(e) => this.handleSend()}>
                            Obter Cotação
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Index;
