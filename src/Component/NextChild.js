const NextChild = (props) => {
   return <>
     <h1>
        Next child...
   </h1>
      <div>
          {props.children}
      </div>
   </>
    
}

export default NextChild;