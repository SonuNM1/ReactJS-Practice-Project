import React, { useContext } from "react";
import { data, data1 } from "../App";

/*   Destructuring   */

function ChildC() {
  const name = useContext(data);
  const gender = useContext(data1);

  return (
    <>
      {/*<data.Consumer>
       {
        (name)=>{
          return (
            <data1.Consumer>
              {
                (gender)=>{
                  return (
                    <h1>My name is: {name} and my gender is: {gender}</h1>
                  )
                }
              }
            </data1.Consumer>
          )
        }
       }
      </data.Consumer>*/}

      {/*<h1>
        Hello, myself: {name} my gender is: {gender}
      </h1>*/}

      

    </>
  );
}

/*      Not destructuring 

function ChildC(props) {
  return (
    <div>
        <h1>Component C displaying: {props.name}</h1>
    </div>
  )
}

*/

export default ChildC;
