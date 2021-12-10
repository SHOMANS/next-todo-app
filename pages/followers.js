import Followers from "../components/Followers";

export default function Home({ results }) {
  return (
    <div>
      <Followers results={results} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://randomuser.me/api/?results=5", {
    method: "GET",
  });
  const data = await response.json();

  return {
    props: {
      ...data,
    },
  };
}
