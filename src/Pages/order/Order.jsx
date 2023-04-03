import React from 'react'
import "./Order.scss"
import deleteImage from '../../assets/delete (1).png'

const Order = () => {
  const currentUser = {
    id: 1,
    seller: true,
    name: "sameer sattar",
  };
  return (
    <div className="order">
      <div className="container">
          <div className='title'>
              <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.seller ? "Buyer": "Seller" }</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </td>
                <td>Gig1</td>
                <td>33</td>
                <td>33</td>
                <td>
                  <img className="delete" src={deleteImage} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </td>
                <td>Gig1</td>
                <td>33</td>
                <td>33</td>
                <td>
                  <img className="delete" src={deleteImage} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </td>
                <td>Gig1</td>
                <td>33</td>
                <td>33</td>
                <td>
                  <img className="delete" src={deleteImage} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </td>
                <td>Gig1</td>
                <td>33</td>
                <td>33</td>
                <td>
                <img className="delete" src={deleteImage} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </td>
                <td>Gig1</td>
                <td>33</td>
                <td>33</td>
                <td>
                <img className="delete" src={deleteImage} alt="" />
              </td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default Order