export interface Game{
  id    : string;
  name  : string;
  votes : number;
  url   : string;
}

export interface Response{
  ok: boolean;
  mensaje: string;
}

export interface ChartData{
  name: string;
  value: number;
}
