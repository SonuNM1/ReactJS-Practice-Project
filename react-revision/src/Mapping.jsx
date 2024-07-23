import React from 'react'
import mapping from './Mapping';

function Mapping() {

    const students = [
        {
            name: "Sonu NM",
            email: "sonu@example.com",
            phone: 0
        },
        {
            name: "Garima",
            email: "garima@example.com",
            phone: 1
        },
        {
            name: "abc",
            email: "abc@example.com",
            phone: 2
        }
    ]

  return (
    <div className='App'>
        <h2>Handle Array with list</h2>
        <table border="1">
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {
                students.map((data)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                </tr>
                )
            }
        </table>
    </div>
  )
}

export default Mapping