export interface UserListItem {
  key: number;
  disabled?: boolean;
  avatar: string;
  userName: string;
  registration: string;
  address: string;
  company: string;
  tax: string;
  contact: string;
  callNo: number;
  status: string;
  createdAt: Date;
  progress: number;
}

export interface UserListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface UserListData {
  list: UserListItem[];
  pagination: Partial<UserListPagination>;
}

export interface UserListParams {
  registration?: string;
  userName?: string;
  address?: string;
  company?: string;
  tax?: string;
  contact?: string;
  status?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
