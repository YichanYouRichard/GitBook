import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import ProjectList from "../components/Project/ProjectList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ProjectList
          projects={user.projects}
          title={user.username}
          showUsername={true}
        />
      )}
    </>
  );
};

export default Profile;
