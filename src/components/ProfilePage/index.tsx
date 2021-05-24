import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Flávio Irineu</h1>
        <h2>@flavioirineu</h2>

        <p>
          Developer at <a href='https://triunfoagency.com.br'>@Triunfoagency</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            João Pessoa, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de abril de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>96</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      {/* <Feed /> */}
    </Container>
  );
}

export default ProfilePage;