import { useState, useEffect } from 'react';

const useZohoOrgID = () => {
  const [orgID, setOrgID] = useState<string>('666343010');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ZOHODESK.extension.onload().then(() => {
      setLoading(false);

      ZOHODESK.get('portal.id').then((data) => {
        setOrgID(data['portal.id']);
      });
    });
  }, []);

  return { orgID, loading };
};

export default useZohoOrgID;
