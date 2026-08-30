export interface NavItem {
  name: string;
  path: string;
  description?: string;
}

export interface RiskLevelDemo {
  range: string;
  label: string;
  colorClass: string;
  badgeClass: string;
  description: string;
}

export interface InnovationItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}
