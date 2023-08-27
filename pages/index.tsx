//templates
import HomePage from "@/components/templates/HomePage";

const index = (props: any) => {
  return (
    <div>
      <HomePage {...props} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.org/posts");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
}
