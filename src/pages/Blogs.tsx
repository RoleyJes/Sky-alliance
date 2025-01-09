import Posts from "../components/Blog/Posts";
import RecentPosts from "../components/Blog/RecentPosts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <main>
        <RecentPosts />
        <Posts />
      </main>
      <Footer />
    </>
  );
}
