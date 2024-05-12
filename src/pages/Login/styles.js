import Styled from 'styled-components/native';

export const Container = Styled.View`
flex:1;
background-color: #36393F;
justify-content: center;
align-items: center;
`;

export const Title = Styled.Text`
color: #FFF;
font-size: 55px;
font-weight: bold;
font-style: italic;
`;

export const Input = Styled.TextInput`
width: 80%;
background-color: #EEE;
padding: 10px;
margin-top: 10px;
border-radius: 7px;
font-size: 17px;
`;

export const Button = Styled.TouchableOpacity`
width: 80%;
background-color: #418cfd;
margin-top: 10px;
padding: 10px;
border-radius: 7px;
justify-content: center;
align-items: center;
`;

export const ButtonText = Styled.Text`
color: #FFF;
font-size: 20px;
`;

export const SignUpButton = Styled.TouchableOpacity`
width: 100%;
margin-top: 10px;
align-items: center;
justify-content: center;
`;

export const SignUpText = Styled.Text`
color: #DDD;
font-size: 15px;
`;