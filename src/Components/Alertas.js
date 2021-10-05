const AlertSB = ({altura, ancho, colorFondo, colorFuente, texto}) =>{
    return(
        <div>
            <div style={{
                width: ancho,
                heigth: altura,
                background:colorFondo,
                font: colorFuente,
                borderRadius: '3px'
                }}>
                    {texto}
            </div>
            <br />
        </div>
    )
}
export{
    AlertSB
};