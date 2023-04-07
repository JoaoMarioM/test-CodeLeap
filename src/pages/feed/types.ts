export type FeedData = {
  title: string;
  content: string;
}

export type FeedRequest = {
  created_datetime: Date;
  username: string;
} & FeedData;