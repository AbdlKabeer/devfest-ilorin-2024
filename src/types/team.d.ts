export interface Team {
  image: string | StaticImageData;
  name: string;
  position?: string | undefined;
  other?: string | undefined;
  isExternal?: string | undefined;
  url?: string | undefined;
}
