export interface IP {
    ip:       string;
    location: Location;
    domains:  string[];
    as:       As;
    isp:      string;
    proxy:    Proxy;
}

export interface As {
    asn:    number;
    name:   string;
    route:  string;
    domain: string;
    type:   string;
}

export interface Location {
    country:    string;
    region:     string;
    city:       string;
    lat:        number;
    lng:        number;
    postalCode: string;
    timezone:   string;
    geonameId:  number;
}

export interface Proxy {
    proxy: boolean;
    vpn:   boolean;
    tor:   boolean;
}