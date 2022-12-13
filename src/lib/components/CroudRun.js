const FIRESTORE_ROOT = import.meta.env.VITE_FIRESTORE_ROOT;

export const dbGetTweetIdsByMonth = async (dateString) => {
	  const form = new URLSearchParams();
	  form.append('dateString', dateString);

	  const options = {
		    method: 'POST',
		    credentials: 'omit',
		    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	  };

	  options.body = form;

	  return await fetch(FIRESTORE_ROOT + 'gettweetidsbymonth/', options)
		    .then((response) => response.json())
		    .then((response) => {
            return response.result;
        })
		    .catch((err) => console.error(err));
};
