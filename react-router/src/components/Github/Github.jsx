import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // Classic way of fetching data from API but slower.
  /*  const [data, setData] = useState([]);
   useEffect(() => {
     fetch("https://api.github.com/users/sandeepsahanicodes")
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
         setData(data);
       });
   }, []);
*/
  // getting the preloaded data from the loader for faster rendering.
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

// create a loader function to fetch data from API
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/sandeepsahanicodes"
  );
  return response.json();
};
