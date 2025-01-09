import Post from "../components/BlogPost/Post";
import RelatedPosts from "../components/BlogPost/RelatedPosts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main>
        <Post />
        <RelatedPosts />
      </main>
      <Footer />
    </>
  );
}
