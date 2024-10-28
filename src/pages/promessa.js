import { useEffect, useState } from "react";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";

export default function Promessa() {
    const [pao, setpao] = useState("")
    useEffect(() => {
        setTimeout(async() => {
            document.title = "Promessa é divida";
            const espera = await mudaPao("é uma divida")
            setpao(espera);
        }, 4000);
    });
    return <>
        <Menu />
        <Container>
            Promessa {pao === "" ? <img src="./loading2.gif" width={50} height={35} /> : pao}
        </Container>
        <Footer />
    </>
}
function mudaPao(texto) {
    return new Promise((resolva) =>
        setTimeout(() => {
            resolva(texto)
        }, 3000));
}