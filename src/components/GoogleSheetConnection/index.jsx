import React, { Fragment, useEffect, useState } from 'react';
import useGoogleSheets from 'use-google-sheets';
import { useSiteContext } from '../../utils/GlobalState';
import { GET_DATA_FROM_DB } from '../../utils/actions';

const GoogleSheet = () => {

  const [state, dispatch] = useSiteContext();
  const { data, loading, error } = useGoogleSheets({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });
  
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(!loading) {
      returnData((data));
    }
  }, [data]);

  function returnData(data) {
    console.log(data);
    dispatch({ type: GET_DATA_FROM_DB, new_show_data : data[0],
      new_merch_data : data[1]});
    setLoading(false);
  }

  
  if (loading && isLoading) {
      return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className=''>
        
    </div>);
    
};

export default GoogleSheet;