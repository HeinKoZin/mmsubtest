import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imdbId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
