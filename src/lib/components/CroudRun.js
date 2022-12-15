const FIRESTORE_ROOT = import.meta.env.VITE_FIRESTORE_ROOT;

const POST_OPTIONS = {
		method: 'POST',
		credentials: 'omit',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};


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

export const dbGetGroupedArea = async (tweetId) => {
	  const form = new URLSearchParams();
	  form.append('tweetId', tweetId);

	  const options = POST_OPTIONS;
	  options.body = form;

	  return await fetch(FIRESTORE_ROOT + 'setgroupedarea/read/', options)
		    .then((response) => response.json())
		    .then((response) => {
            return response.result;
        })
		    .catch((err) => console.error(err));
};

export const dbGetAllGroupedArea = async () => {
	  const form = new URLSearchParams();
	  const options = POST_OPTIONS;
	  options.body = form;

	  return await fetch(FIRESTORE_ROOT + 'setgroupedarea/export/', options)
		    .then((response) => response.json())
		    .then((response) => {
            console.log('request export');
            return response.result;
        })
		    .catch((err) => console.error(err));
};
