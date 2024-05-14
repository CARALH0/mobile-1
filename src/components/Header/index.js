import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles'
import { Title } from '../../pages/Login/styles';


export default function Header() {
 return (
   <Container>
        <Title>
          Post
          <Text style={{ fontStyle: 'italic', color: '#e52246'}}>IN</Text>
        </Title>
    </Container>
  );
}