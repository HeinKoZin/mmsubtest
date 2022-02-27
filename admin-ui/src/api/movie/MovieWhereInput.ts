import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MovieWhereInput = {
  id?: StringFilter;
  imdbId?: StringNullableFilter;
  title?: StringFilter;
};
