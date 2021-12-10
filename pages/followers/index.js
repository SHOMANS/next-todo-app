import Followers from "../../components/Followers";

export default function index({ followers }) {
  return (
    <div>
      <Followers followers={followers} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/followers", {
    method: "GET",
  });
  const data = await response.json();

  return {
    props: {
      ...data,
    },
  };
}
