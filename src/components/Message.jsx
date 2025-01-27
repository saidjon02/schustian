import React, { useEffect, useState } from 'react';
import 'boxicons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Message() {
  const [messages, setMessages] = useState([]);

  // Ma'lumotlarni olib kelish
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://ac8d73010fc49ec5.mokky.dev/item');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleRemove = async (id) => {
    try {
      const response = await fetch(`https://ac8d73010fc49ec5.mokky.dev/item${id.toString()}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
        alert('Message deleted successfully!');
      } else {
        alert('Failed to delete the message.');
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('An error occurred while deleting the message.');
    }
  };

  return (
    <div className="message container">
      <Helmet>
        <title>S.Chustian - Travel and New Discoveries</title>
        <meta
          name="description"
          content="S.Chustian - Travels, new opportunities. Various places and useful tips. Travel with us and witness the changes!"
        />
        <meta property="og:title" content="S.Chustian - Travel and New Discoveries" />
        <meta
          property="og:description"
          content="S.Chustian - Travels, new opportunities. Various places and useful tips. Travel with us and witness the changes!"
        />
        <meta property="og:image" content="../../Imgs/the-logo.png" />
        <meta property="og:url" content="https://schustian.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="S.Chustian - Travel and New Discoveries" />
        <meta
          name="twitter:description"
          content="S.Chustian - Travels, new opportunities. Various places and useful tips. Travel with us and witness the changes!"
        />
        <meta name="twitter:image" content="../../Imgs/the-logo.png" />
        <link rel="canonical" href="https://schustian.netlify.app/messege12321  " />
      </Helmet>
      {messages.map((message) => (
        <div className="m-box" key={message.id}>
          <h2 className="m-title">
            {message.name} {message.surname}
          </h2>
          <p className="m-text">{message.text}</p>
          <hr />
          <div className="m-b-row">
            <img
              src={`https://ui-avatars.com/api/?name=${message.name}+${message.surname}&background=random`}
              alt="User Avatar"
              className="m-img"
            />
            <h4 className="m-h4">{message.email}</h4>
          </div>
          <i className="bx bxs-message-x" onClick={() => handleRemove(message.id)}></i>
        </div>
      ))}
      <div className="back-to-home">
        <Link to={'/'} className="not-link">
          <button className="not-btn">
            <i class="bx bx-arrow-back"></i> Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Message;
