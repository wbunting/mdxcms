import React from 'react';
import useFocus from './useFocus';

const useCMSReload = (etag) => {
  const focused = useFocus();
  React.useEffect(
    () => {
      if (focused) {
        fetch(window.location, {
          headers: {
            pragma: "no-cache"
          }
        }).then(res => {
          if (res.ok && res.headers.get("x-version") !== etag) {
            window.location.reload();
          }
        });
      }
    },
    [focused]
  );
}

export default useCMSReload;