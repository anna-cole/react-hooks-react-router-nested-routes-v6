import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext()
  //console.log(params) params.id is a string, console typeof(params.id) to see. Params.id returns the id of the object that was clicked. 
  //console.log(users)

  const user = users.find(user => user.id === parseInt(params.id))
  //console.log(user) find return the element itself, as opposed to filter that returns an array of elements

  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

//Note: We're using an aside here instead of main because UserProfile is now being rendered as a child of Home, and Home already has a main element. HTML best practices dictate that there should be only one main element per page view. And, since UserProfile only appears on a nested route, we're displaying it in an aside, as it will appear alongside the list of users we're rendering. We can also use an empty tag instead <></>

export default UserProfile;