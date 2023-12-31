import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const TestePageCopy = () => {
    //Variaveis do componente
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState();

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));
        console.log("Total");
    };

    return (
        <div>
            <h1>Página de Poc's</h1>
            <h2>Calculator</h2>

            <form onSubmit={handleCalcular}>
                <Input type="number" placeholder="Primeiro número" name="n1" id="n1" value={n1} onChange={(e) => { setN1(e.target.value) }} />
                <br />

                <Input type="number" placeholder="Segundo número" name="n2" id="n2" value={n2} onChange={(e) => { setN2(e.target.value) }} />
                <br />

                <Button
                    textButton="Calcular"
                    type="submit"
                />

                <br />

                <p>Valor do N1: {n1}</p>    
                <p>Valor do N2: {n2}</p>
                <br />

                <span>Resultado Total: <strong id='res'>{total}</strong></span>
            </form>

        </div>
    );
};

export default TestePageCopy;