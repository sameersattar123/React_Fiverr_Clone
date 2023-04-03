import React from 'react'
import { Link } from 'react-router-dom'
import "./Message.scss"

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className='link'>MESSAGES</Link> SAMEER SATTAR
        </span>
        <div className="messages">
          <div className="item">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item owner">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item owner">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item owner">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
          <div className="item owner">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae sint, obcaecati nostrum accusantium possimus quos? Nam mollitia, dignissimos ut eum soluta, sint fugiat numquam dolore cum animi, voluptatibus similique!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea placeholder='Write a Message'  ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message