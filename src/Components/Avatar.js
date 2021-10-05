import cross from './Imagen/cross.jpg'

export const Avatar = ({imagen}) =>{;
    return(
      <div style={{
        width:'300px',
        height:'300px',
        marginTop:'100px',
        marginLeft:'38%'
      }}>
         < img src = {cross}  style ={{
          borderRadius:imagen,
          width:'200px',
          height:'200px',
          marginTop:'100px',
          marginLeft:'100px'
            
        }} />

      </div>
       
    )
    
}