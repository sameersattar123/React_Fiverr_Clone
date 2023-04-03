import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
import "../../App.scss"

const Messages = () => {
  const MESSAGE = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat?"
  const currentUser = {
    id: 1,
    seller: true,
    name: "sameer sattar",
  };
  return (
    <div className="messages">
      <div className="container">
          <div className='title'>
              <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>
              Sameer Sattar
                </td>
                <Link to="/message/123" className='link'>
                 {MESSAGE}
                </Link>
                <td>1 day ago</td>
                <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr className='active'>
              <td>
              Sameer Sattar
                </td>
                <Link to="/message/123" className='link'>
                 {MESSAGE}
                </Link>
                <td>1 day ago</td>
                <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>
              Sameer Sattar
                </td>
                <td>
                 <Link to="/message/123" className='link'>
                 {MESSAGE}
                </Link>
                 </td>
                <td>1 day ago</td>
            </tr>
            <tr>
              <td>
              Sameer Sattar
                </td>
                <td>
                <Link to="/message/123" className='link'>
                 {MESSAGE}
                </Link>
                  </td>
                <td>1 day ago</td>
            </tr>
            <tr>
              <td>
              Sameer Sattar
                </td>
                <td> 
                <Link to="/message/123" className="link">
                 {MESSAGE}
                </Link>
                 </td>
                <td>1 day ago</td>
            </tr>
            <tr>
              <td>
              Sameer Sattar
                </td>
                <td> 
                <Link to="/message/123"  className='link'>
                 {MESSAGE}
                </Link>
                  </td>
                <td>1 day ago</td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default Messages