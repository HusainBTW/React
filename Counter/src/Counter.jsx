import React , {useState} from 'react'
// import React  from 'react'

function Counter() {
    const [count , setCount] = useState(0);
    
    const increment = () =>{
        setCount (count+1);
    };

    const decrement = () =>{
        setCount (count-1);
    };

    const reset = () =>{
        setCount(0);
    }

    const styles = {
        container:{
            fontSize: '25px',
            textAlign: 'center' , 
            marginTop: '50px' , 
            marginLeft: '565px' ,
            backgroundColor: '#66B2FF' ,
            width: '400px' , 
            height: '240px' ,
            borderRadius: '110px',
            paddingTop: '30px',
        },
        button:{
            height: '30px',
            border: 'blue',
            width: '90px',
            marginLeft: '10px',
        }
    }

    return (
    <div style={styles.container}>
        <h1>Counter: {count}</h1>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
        <button onClick={reset}     style={styles.button}>Reset</button>
    </div>
  );
}
export default Counter;