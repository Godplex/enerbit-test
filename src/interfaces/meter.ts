export interface MetersResponse {
  items: Meter[];
  page: number;
  size: number;
  total: number;
  pages: number;
  next_page: null;
  previous_page: null;
}

export interface Meter {
  serial: string;
  connection_type: ConnectionType;
  storage_system: StorageSystem;
  condition: Condition;
  owner: Owner;
  location: string;
  manufacturer: string;
  purchase: string;
  i_max: number;
  i_b: number;
  i_n: number;
  seals: number;
  id: number;
  created_at: string;
  updated_at: null | string;
}

export enum Condition {
  Nuevo = "nuevo",
  Usado = "usado",
}

export enum ConnectionType {
  Directa = "directa",
  Indirecta = "indirecta",
  SemiDirecta = "semi-directa",
}

export enum Owner {
  RF = "RF",
  OR = "OR",
}

export enum StorageSystem {
  Interno = "interno",
  Externo = "externo",
}
