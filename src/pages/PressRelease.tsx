import DownloadKit from "../components/PressRelease/DownloadKit";
import MediaCoverage from "../components/PressRelease/MediaCoverage";
import MediaRelease from "../components/PressRelease/MediaRelease";

export default function PressRelease() {
  return (
    <>
      <main>
        <MediaRelease />
        <DownloadKit />
        <MediaCoverage />
      </main>
    </>
  );
}
