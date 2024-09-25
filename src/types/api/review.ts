export interface ReviewResponse {
  id: number;
  place: number;
  writer: number;
  rate: number;
  description: string;
  convenience: string[];
  imgUrls: string[];
  USER: {
    name: string;
  };
}
