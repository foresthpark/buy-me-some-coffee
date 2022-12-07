export interface AirTableRecord {
  records: Record[];
  offset: string;
}

export interface Record {
  id: string;
  createdTime: Date;
  fields: Fields;
}

export interface Fields {
  name: string;
  message: string;
  coffees: number;
}
