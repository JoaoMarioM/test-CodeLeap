import { FeedData } from "@/types/home.types";

export type ModalEditProps = {
  isOpen: boolean;
  onClose: () => void;
  dataFeed: FeedData[];
  feedIndexSelected: number;
}