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
      <TextField source="description" label="Descrição"/>
      <TextField source="phoneNumber" />
      <Avatar source="photoURL" label="Imagem Perfil"/>
      <ShowButton label="" />
    </Datagrid>
  </List>
);

export const ShowList = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="description" label="Descrição"/>
      <TextField source="phoneNumber" label="Telefone"/>
      <ImageField source="photoURL" label="Imagem Perfil" />
      <ArrayField source="items">
        <Datagrid>
          <TextField source="name" />
          <TextField source="description" />
          <ImageField source="photoURL" label="Imagem" className="image"  />
          <TextField source="subscriber.name" label="Assinado por" />
          <TextField source="subscriber.email" />
          <ImageField source="subscriber.photoURL" className="image" />
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
      <TextInput source="description" label="Descrição"/>
      <TextInput source="phoneNumber" label="Telefone"/>
      <TextInput source="photoURL" title="title" label="Imagem do dono da lista" />
      <ArrayInput source="items">
        <SimpleFormIterator>
          <TextInput source="name" label="Nome" />
          <TextInput source="description" label="Descrição"/>
          <TextInput source="photoURL" label="Imagem do item" />
          <TextInput source="subscriber.name" label="Assinado por" />
          <TextInput source="subscriber.email" label="Email do assinante" />
          <TextInput source="subscriber.photoURL" label="Imagem do assinante" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </CreateOrEdit>
);
