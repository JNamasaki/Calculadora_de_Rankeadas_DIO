import e, { json } from "express";
import { calcPontuacao } from "./controller/CalculadoraVitorias.js";
import { classificaRank } from "./controller/ClassificaRank.js";


const app = e();

const PORT =4000;

app.use(e.json());


app.get('/api', (req,res)=> res.status(200).json({msg:"tudo ocorre bem!"}));

app.post('/api/rankeando', (req,res) =>{
    const {vitorias,derrotas} = req.body;

    const totalvitorias = calcPontuacao(vitorias,derrotas);

    const nivel = classificaRank(totalvitorias) ;

    if(nivel == "invalido") res.status(400).json({msg:`O total de vitorias é Invalido`})
    
    res.json({msg:`O Herói tem de saldo de ${totalvitorias} está no nível de ${nivel}`})
})



app.listen(PORT, console.log(`Ouvindo na porta localhost:${PORT}`));


