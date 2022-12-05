import {SavedContainer,SavedGrid,Element,Subtitle} from './saves-style';
const Saved=({data,func})=>{
    //Si mo hay datos, no carga la lista para que no haya errores
    return <SavedContainer>
        <Subtitle>saved</Subtitle>
        <SavedGrid>
            {data.length>0?data.map((obj,index)=><Element key={index}>
                <div>
                    <p style={{marginRight:2}}>{obj.numero}</p>
                    {obj.unit==="km"?<p>km <span>&#8594;</span> {obj.resultado*100/100} miles</p>:
                    obj.unit==="mk"?<p>miles <span>&#8594;</span> {obj.resultado*100/100} km</p>:
                    obj.unit==="pm"?<p>feet <span>&#8594;</span> {obj.resultado*100/100} meters</p>:
                    obj.unit==="mp"?<p>meters <span>&#8594;</span> {obj.resultado*100/100} feet</p>:
                    obj.unit==="cp"?<p>centimeters <span>&#8594;</span> {obj.resultado*100/100} inches</p>:
                    <p>inches <span>&#8594;</span> {obj.resultado*100/100} centimeters</p>}
                </div>
                <button onClick={()=>func(index,obj.id)}><p>X</p></button>
            </Element>):null}
        </SavedGrid>
    </SavedContainer>
}
export default Saved;