export interface DataTimeLine {
  year: number;
  text: string;
}

export interface DataYears {
  from: number;
  before: number;
}

export interface DataModel {
  [key: string]: {
    years: DataYears,
    timeLine: DataTimeLine[]
  }
}