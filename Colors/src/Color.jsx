import React , {useState} from 'react'

function Color(){

    const [colors , setColors] = useState([
        'black' , 'white' , 'black' ,
        'white' , 'black' , 'white' ,
        'black' , 'white' , 'black' ,
    ]);

    const toggleColor = (index) =>{
        const newColors = [...colors];
        newColors[index] = newColors[index] === 'black' ? 'white' : 'black';
        setColors(newColors);
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: '100vh' }}>
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => toggleColor(index)}
              onMouseEnter={() => toggleColor(index)}
              // onMouseLeave={() => toggleColor(index)}
              style={{
                backgroundColor: color,
                    // color: '#808080',
                    // color: color,
                    color: color === 'black' ? 'white' : 'black',
                    // border: '1px solid #000',
                    border: color,
                width: '100%',
                height: '100%',
                fontSize: '24px',
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      );
    }
    
export default Color;