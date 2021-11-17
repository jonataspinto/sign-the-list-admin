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
  ArrayInput,
  SimpleFormIterator,
  ArrayField,
  ShowButton,
  required
} from "react-admin";
import { Avatar } from "@material-ui/core"

const ImgAvatar = (props) => {
  const { record, source } = props;
  let imgSrc = null;

  if (source?.includes('.')) {
    source.split('.').filter(value => Boolean(value)).forEach((current, index) => {
      if(index === 0 ) {
        imgSrc = record[current]

        return;
      }
      imgSrc = imgSrc[current] 
      return;
    })
  } else {
    imgSrc = record[source]
  }

  return (<Avatar src={imgSrc} label="Imagem Perfil"/>)
}

export const ListsOfItems = (props) => {
  
  return (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="code" label="Código"/>
      <TextField source="description" label="Descrição"/>
      <TextField source="phoneNumber" />
      <ImgAvatar source="photoURL" />
      <ShowButton label="" />
    </Datagrid>
  </List>
)};

export const ShowList = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="description" label="Descrição"/>
      <TextField source="phoneNumber" label="Telefone"/>
      <ImgAvatar source="photoURL" label="Imagem Perfil" />
      <ArrayField source="items">
        <Datagrid>
          <TextField source="name" />
          <TextField source="description" />
          <ImgAvatar source="photoURL" label="Imagem" />
          <TextField source="subscriber.name" label="Assinado por" />
          <TextField source="subscriber.email" label=""/>
          <ImgAvatar source="subscriber.photoURL" label=""/>
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
      <TextInput source="code" label="Código" validate={[required()]}/>
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
