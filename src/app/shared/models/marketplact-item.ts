export interface MarketplaceItem {
  availability: Availability;
  id:           number;
  info:         Info;
  links:        Links;
}

export interface Availability {
  price: number;
  qty:   number;
  total: number;
}

export interface Info {
  category:    string;
  created:     number;
  description: string;
  expires:     number;
  name:        string;
}

export interface Links {
  discord: string;
  img:     string;
  twitter: string;
}
