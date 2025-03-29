"use client"
import { Modal } from "antd";

import { useUserStore } from "@/store/user-store";
import { useAppStore } from "@/store/app-store";

import PlayList from "./playlist/PlayList";

const PlayListProvider = () => {

  const playlistModalOpen = useAppStore(
    (state) => state.playListModalOpen
  );
  const setPlaylistModalOpen = useAppStore(
    (state) => state.setPlayListModal
  );

  const setMusicClicked = useAppStore((state) => state.setMusicClicked);

  const playlists = useUserStore((state) => state.playLists);

  const hideModal = () => {
    setPlaylistModalOpen(false);
    setMusicClicked(null);
  };

  return (
    <Modal
      title="Add Music To PlayList"
      open={playlistModalOpen}
      footer={null}
      onCancel={hideModal}
    >
      <PlayList playlists={playlists} onButtonClick={hideModal} />
    </Modal>
  );
};

export default PlayListProvider;
