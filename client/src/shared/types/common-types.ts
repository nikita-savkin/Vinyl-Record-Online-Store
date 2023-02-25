export interface ProductFull {
  uid: string | null;
  artist: string;
  album: string;
  label: string;
  genre: string[] | [];
  storageImgUrl: string;
  price: number | null;
  year: string;
}
