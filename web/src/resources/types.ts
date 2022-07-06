export interface ActivityListProps {
  activityList: Activities[]
}

export interface ActivitiesProps {
  key: number,
  activities: Activities
}

export interface Activities {
  activity: string,
  type: string,
  participans: number,
  price: number,
  link: string,
  key: string,
  accesibility: number
}