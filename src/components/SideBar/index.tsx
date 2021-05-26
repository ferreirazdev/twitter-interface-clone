import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchtWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchtWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchtWrapper>

      <StickyBox>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Sivestre Istalonge"
              nickname="@iricacimba"
            />,
            <FollowSuggestion
              name="Arnildo Chuazineguer"
              nickname="@arnineguer"
            />,
            <FollowSuggestion
              name="Isadora Pinto"
              nickname="@isapinto"
            />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;