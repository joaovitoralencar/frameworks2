import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import Accordion from 'react-bootstrap/Accordion';

export default function Produtos() {
    var produtos = [
        {
            id: 1,
            produto: "Tênis de Corrida",
            descricao: "O tênis de corrida é projetado para proporcionar conforto e suporte durante suas atividades físicas. Com uma estrutura leve e respirável, ele se adapta ao formato do pé, reduzindo o impacto nas articulações. Ideal para corredores iniciantes e experientes, este modelo é perfeito para treinos diários e maratonas, garantindo performance e segurança."
        },
        {
            id: 2,
            produto: "Bicicleta de Montanha",
            descricao: "A bicicleta de montanha é a escolha perfeita para quem gosta de aventuras em trilhas. Com um quadro robusto e pneus largos, ela oferece excelente tração e estabilidade em terrenos irregulares. Seu sistema de suspensão absorve impactos, proporcionando uma pedalada suave. Ideal para explorar a natureza e manter-se ativo, ela é uma excelente opção para os amantes do ciclismo."
        },
        {
            id: 3,
            produto: "Bola de Futebol",
            descricao: "A bola de futebol é um equipamento essencial para os apaixonados pelo esporte. Fabricada com materiais duráveis e resistentes à água, ela garante qualidade e desempenho em qualquer condição. Seu design aerodinâmico proporciona maior precisão nas jogadas, tornando-a ideal tanto para treinos quanto para partidas. Um item indispensável para quem busca aprimorar suas habilidades no futebol."
        },
        {
            id: 4,
            produto: "Raquete de Tênis",
            descricao: "A raquete de tênis é uma ferramenta fundamental para jogadores de todos os níveis. Com um equilíbrio perfeito entre leveza e potência, ela permite que os atletas realizem golpes precisos e eficazes. Feita com materiais de alta tecnologia, a raquete oferece controle e durabilidade. Ideal para treinos intensos ou competições, é um item que pode fazer a diferença no desempenho do jogador."
        },
        {
            id: 5,
            produto: "Equipamento de Yoga",
            descricao: "O equipamento de yoga é projetado para ajudar na prática e aperfeiçoamento das posturas. Inclui um tapete antiderrapante, blocos de suporte e uma faixa elástica para aumentar a flexibilidade. Este conjunto é perfeito para iniciantes e praticantes avançados, proporcionando conforto e segurança durante as aulas. Ideal para relaxar a mente e fortalecer o corpo, ele transforma a prática em uma experiência única."
        }
    ]


    return <>
        <Menu />
        <Container>
            <Accordion defaultActiveKey="0">
                {produtos.map(item =>
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.produto}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.descricao}
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Container>
        <Footer />
    </>
}