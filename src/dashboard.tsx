import React, { useEffect }  from 'react';
import Chart from './chart';

export default function Dashboard() {

  useEffect(() => {
    document.title = 'My Test - Dashboard';
  }, []);

  return (
    <div>
      <h3 style={{ margin: '15px 0 0 30px' }}>My Dashboard</h3>
      <br/>
      <div style={chartContainer}>
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
      </div>
    </div>
  );
}

function CustomChart({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <Chart />
    </div>
  );
}

const chartContainer: React.CSSProperties = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'left',
};

const chartStyle: React.CSSProperties = {
  width: '300px',
  height: '200px'
};
