import { useEffect, useState } from "react";
import { api } from "../shared/utils/api";
import Modal from "./Modal";

export const Home = () => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function getVideoList() {
    const videoList = await api.fetchData({
      url: "http://localhost:8060/api/videos",
    });

    if (videoList.isOk) {
      setVideos(videoList.data);
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <div className="bg-dark-100">
      <h1 className="text-2xl font-bold text-center mt-4">Home</h1>

      <div className="container mx-auto mt-4">
        <div className="grid lg:grid-cols-3 sm:grid-flow-dense gap-1">
          {videos.map((video) => (
            <div
              key={video.videoId}
              className="bg-slate-400 p-3 shadow-md rounded-md mx-2"
            >
              <h2 className="text-lg font-semibold mb-2 overflow-clip overflow-ellipsis text-nowrap">
                {video.name}
              </h2>
              <img
                className="w-full h-36 object-cover rounded-md mb-2"
                src={`http://localhost:8060/get-video-asset?type=thumbnail&videoId=${video.videoId}`}
                alt="video thumb"
              />
              <div className="grid grid-cols-3 gap-4 overflow-clip overflow-ellipsis">
                <button className="bg-slate-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md overflow-clip overflow-ellipsis">
                  Play
                </button>
                <button className="bg-slate-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md overflow-clip overflow-ellipsis">
                  Extract Audio
                </button>
                <button
                  onClick={() => {
                    setSelectedVideo(video);
                    setIsModalOpen(true);
                  }}
                  className="bg-slate-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md overflow-clip overflow-ellipsis"
                >
                  Resizes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedVideo && (
        <Modal
          originalResolution={selectedVideo.dimensions}
          videoName={selectedVideo.name}
          videoResizes={Object.keys(selectedVideo.resizes)}
          closeModal={() => {
            setIsModalOpen(false);
            setSelectedVideo(null);
          }}
        />
      )}
    </div>
  );
};
