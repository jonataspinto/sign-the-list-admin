import React from "react";
import {
  List,
  Datagrid,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  Show,
  SimpleShowLayout,
  FileInput,
  FileField,
  ImageField,
  ArrayInput,
  SimpleFormIterator,
  ArrayField,
  ShowButton
} from "react-admin";
import { Avatar } from "@material-ui/core"
import "./style.css"

export const ListsOfItems = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <Avatar source="image.src" label="Imagem Perfil"/>
      <ShowButton label="" />
    </Datagrid>
  </List>
);

export const ShowList = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <ImageField source="image.src" label="Imagem Perfil" />
      <ArrayField source="items">
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="image.src" label="Imagem" className="image"  />
        </Datagrid>
    </ArrayField>
    </SimpleShowLayout>
  </Show>
);

const CreateOrEdit = (props) => {
  if (props.id) return <Edit title="Editar Lista" {...props} />;
  return <Create title="Criar Lista" {...props} />;
};

export const CreateOrEditList = (props) => (
  <CreateOrEdit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nome"/>
      <TextInput source="email"/>
      <TextInput source="phone" label="Telefone"/>
      <FileInput source="image" label="Imagem do dono da lista">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="items">
        <SimpleFormIterator>
        <TextInput source="name" label="Nome" />
        <TextInput source="description" label="Descrição"/>
        <FileInput source="image" label="Imagem do item">
          <FileField source="src" title="title" />
        </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </CreateOrEdit>
);
