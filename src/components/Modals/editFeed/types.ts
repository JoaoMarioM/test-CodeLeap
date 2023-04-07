import { FeedData } from "@/pages/feed/types";

export type ModalEditProps = {
  isOpen: boolean;
  onClose: () => void;
  dataFeed: FeedData[];
  feedIndexSelected: number;
}