import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MovieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="imdb_id" source="imdbId" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
