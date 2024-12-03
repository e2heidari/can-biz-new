export interface Category {
  id: string;
  name: string;
  parentId?: Category["id"];
  description?: string;
}
