function Index() {
    return <div>
        2 Olá React, aula de Frameworks <Capslock texto = "Bem vindo"/>
        </div>
}

function Capslock(param){
    console.log(param);

    return <div>(param.texto)</div>
}
export default Index;