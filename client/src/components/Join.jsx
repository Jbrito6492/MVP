import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, nameState] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <h1>Join</h1>
      <div><input placeholder="Name" type="text" onChange={e => setName(e.target.value)} required /></div>
      <div><input placeholder="Room" type="text" onChange={e => setName(e.target.value)} required /></div>
      <Link onClick={e=>(!name || !room) ? e.preventDefault() : null}to={`/chat?name=${name}&room=${room}`}>
        <button type="submit">Join</button>
      </Link>
    </div>
  )
}

export default Join;