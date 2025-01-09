import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DownloadKit from "../components/PressRelease/DownloadKit";
import MediaCoverage from "../components/PressRelease/MediaCoverage";
import MediaRelease from "../components/PressRelease/MediaRelease";

export default function PressRelease() {
  return (
    <>
      <Navbar />

      <main>
        <MediaRelease />
        <DownloadKit />
        <MediaCoverage />
      </main>

      <Footer />
    </>
  );
}
