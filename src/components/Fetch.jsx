import React, { useState } from 'react';
function Fetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}

export default Fetch;
