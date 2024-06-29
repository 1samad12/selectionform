import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

function Notfontpage() {
    const navigate = useNavigate();

  return (
    <div>
  <Result
    status="404"
    title="404"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
  />
    </div>
  )
}

export default Notfontpage