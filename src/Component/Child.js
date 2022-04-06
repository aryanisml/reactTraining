import NextChild from "./NextChild";

const Child = (props) =>{
    return <>
        <h3>
             {props.empprops.name} {props.empprops.salary} 
        </h3>
    </>
}
export default Child;