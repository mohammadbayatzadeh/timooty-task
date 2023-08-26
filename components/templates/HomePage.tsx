import { Data } from "@/types/PostType";
import PostCard from "../modules/Card";

function HomePage(props: any) {
  const { data } = props;
  return (
    <div>
      {data.map((i: Data) => (
        // <li>{i.title}</li>
        <PostCard />
      ))}
    </div>
  );
}

export default HomePage;
