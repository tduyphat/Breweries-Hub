interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  city: string;
  state: string;
  website_url: string | null;
}

export default Brewery;
