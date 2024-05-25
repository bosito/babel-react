import { Event } from "./response.interfaces";

export interface ICardChannelMockData {
  id: string;
  alt: string;
  src: string;
  message: string;
}

export interface ISelectedChannel extends Event {
  channelImageUrl?: string;
}

export type SelectedChannelState = ISelectedChannel | null;
