interface Metadata {
  id: string;
  title: string;
  author: string;
  date: Date;
}

interface Post extends Metadata {
  content: string;
}
