import React from 'react';
import {Table} from 'react-bootstrap' ; 

function Mapping2() {

    const students = [
        {
            name: "Sonu NM", email: "sonu@example.com", phone: 0
        },
        { 
            name: "Garima", email: "garima@example.com", phone: 1
        },
        {
            name: "abc", email: "abc@example.com", phone: 2
        }
    ]

  return (
   <div className='App'>
        <h1>List with bootstrap table</h1>
        <Table striped variant='dark'>
            <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {
                students.map((item,i)=>
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr> 
                )
            }
            </tbody>
        </Table>
   </div>
  )
}

export default Mapping2