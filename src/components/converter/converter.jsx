import {useState,useEffect} from 'react';
import {createConversion,getConversions,deleteConversionById} from '../../app/api';
import {GeneralContainer,ConverterContainer,TitleDiv,SelectorDiv,InputNumberDiv,BotonDiv,BotonCorazon,OutDiv,AlignDiv} from './converter-style';
import Saved from '../saved/saved';
import {BsArrowLeftRight,BsHeart} from 'react-icons/bs';
const Converter=()=>{
    const [global,setGlobal]=useState({numero:0.00,resultado:null,unit:"km"});
    const [data,setData]=useState([]);
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        getOldConverions();
    },[]);
    //Este useEffect es para la llamda de datos a Firebase
    //He utilizado Firebase para este ejercicio porque no sé de Node ni express
    useEffect(()=>{
        const equals={"km":0.621371,"mk":1.60934,"pm":0.3048,"mp":3.28084,"cp":0.393701,"pc":2.54};
        setGlobal(prev=>({...prev,resultado:(Math.round(global.numero*equals[global.unit]*100)/100).toFixed(2)}));
    },[global.numero,global.unit]);
    //En este caso he utilizado un estado en forma de objeto que maneje las tres variables.
    //El useEffect es para que actualice el resultado cada vez que cambie el input o las unidades utilizadas
    const revertUnit=()=>{
        //Esta función intercambia las unidades, utilizo un ternario
        const newUnit=global.unit==="km"?"mk":
        global.unit==="mk"?"km":
        global.unit==="pm"?"mp":
        global.unit==="mp"?"pm":
        global.unit==="cp"?"pc":
        "cp";
        setGlobal(prev=>({unit:newUnit,numero:prev.resultado}));
    };
    const guardar=async()=>{
        //Esta función guarda la conversión de ese monento en una lista que se pasa al componente child
        //También he añadido que se guarde en la bbdd de Firebase mediante la creación de un nuevo objeto
        //Primero, crea la instancia en la bbdd y espera la id, y luego lo añade en la lista para el child
        const id=await createConversion({numero:global.numero,resultado:global.resultado,unit:global.unit});
        data.push({id,numero:global.numero,resultado:global.resultado,unit:global.unit});
        setGlobal(prev=>({...prev,numero:0}));
        setData(data);
        setToggle(!toggle);
    };
    const eliminar=(index,id)=>{
        //Esta función va al child, recoge el índice y la id de la bbdd del elemento, y con estos dos inputs los elimina tanto de la lista local como de la bbdd
        data.splice(index,1);
        deleteConversionById(id);
        setToggle(!toggle);
    };
    const getOldConverions=async()=>{
        //Función que llama el primer useEffect nada más abrir la aplicación para traer los datos de la bbdd
        //Si no hay nada en la bbdd, devuelve un array vacío
        const result=await getConversions();
        result.forEach(obj=>data.push(obj));
        setToggle(!toggle);
    };
    return <GeneralContainer>
        <ConverterContainer>
            <TitleDiv>
                <h2>convert</h2>
            </TitleDiv>
            <SelectorDiv>
                <select 
                    name="units" 
                    id="units" 
                    value={global.unit}
                    onChange={e=>setGlobal(prev=>({...prev,unit:e.target.value}))} 
                >
                    <option value="km">Km <span>&#8594;</span> miles</option>
                    <option value="mk">Miles <span>&#8594;</span> km</option>
                    <option value="pm">Foots <span>&#8594;</span> meters</option>
                    <option value="mp">Meters <span>&#8594;</span> foots</option>
                    <option value="cp">Centimeters <span>&#8594;</span> inches</option>
                    <option value="pc">Inches <span>&#8594;</span> centimeters</option>
                </select>
            </SelectorDiv>
            <BotonDiv>
                <button onClick={revertUnit}>
                    <BsArrowLeftRight color='#FFF' size={15}/>
                </button>
            </BotonDiv>
            <InputNumberDiv>
                <input type="number" name="in" value={global.numero} step={0.01} onChange={e=>setGlobal(prev=>({...prev,numero:e.target.value}))}/>
            </InputNumberDiv>
            <AlignDiv>
                <p>
                    {global.unit==="km"?"km":
                    global.unit==="mk"?"miles":
                    global.unit==="pm"?"foots":
                    global.unit==="mp"?"meters":
                    global.unit==="cp"?"centimeters":
                    "inches"}
                </p>
            </AlignDiv>
            <BotonCorazon>
                <button style={{backgroundColor:"transparent"}} onClick={guardar}>
                    <BsHeart color='#FFF' size={17}/>
                </button>
            </BotonCorazon>
            <OutDiv>
                <output name="out">{global.resultado}</output>
            </OutDiv>
            <AlignDiv>
                <p>
                    {global.unit==="km"?"miles":
                    global.unit==="mk"?"km":
                    global.unit==="pm"?"meters":
                    global.unit==="mp"?"foots":
                    global.unit==="cp"?"inches":
                    "centimeters"}
                </p>
            </AlignDiv>
        </ConverterContainer>
        <Saved data={data} func={eliminar}/>
    </GeneralContainer>
};
export default Converter;