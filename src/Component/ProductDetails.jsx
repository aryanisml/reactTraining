const ProductDetails = (props) => {

return <>
    <h1>Product Details</h1>
    { 
        props.productProps.map((response )=> {
           return <>
                <h2 key={response.name}>
                    {response.name} {response.price}
                 </h2>
           </> 

        })
    }
</>
}

export default ProductDetails;









/*


@Compont{}
export class HellComponent {


}

@Inject(){

}
export class HelloService {

}


*/

