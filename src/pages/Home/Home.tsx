import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Box1, Box2, Button, ButtonDiv, Card, CardBox, CardImage, CardLink, CardText, Img, MainBox, MainSection, SecButton, SecondaryBox } from './Home.style';

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <MainSection>
            <MainBox>
                <Box1>
                    <h1>Conheça nossos</h1>
                    <h1>produtos e se torne</h1>
                    <h1>um cliente Salesforce</h1>
                    <p>Atendemos todos os serviços de CRM com suporte 24h e um teste</p>
                    <p>grátis para garantir a qualidade sem se arrepender de nada!</p>
                <ButtonDiv>
                    <Button>Faça o teste grátis</Button>
                    <SecButton>Saiba mais</SecButton>
                </ButtonDiv>  
                </Box1>
                <Box2>
                    <Img src="https://i.ibb.co/VgLY7pt/Salesforce1.png" alt="Logo da empresa" />
                </Box2>
            </MainBox>
            <SecondaryBox>
                <Card>
                    <CardImage src='https://i.ibb.co/DthS4fF/Link-Fortalec-a-a-empresa-do-seu-cliente-com-dados-unificados-e-em-tempo-real-data-cloud-card-png.png'/>
                    <CardBox>
                        <CardText>Temos diversos produtos disponíveis para atender suas necessidades</CardText>
                        <CardLink>Conheça os produtos</CardLink>
                    </CardBox>
                </Card>
                <Card>
                    <CardImage src='https://i.ibb.co/Y0KWH0n/div-card-image-wrapper.png'/>
                    <CardBox>
                        <CardText>Nossa equipe é determinada e mantemos o foco na exatidão e garantia</CardText>
                        <CardLink>Conheça a equipe</CardLink>
                    </CardBox>
                </Card>
                <Card>
                    <CardImage src='https://i.ibb.co/WBZg8y6/Link-Marketing-no-Whats-App-O-que-e-e-como-integrar-a-sua-estrate-gia-de-marketing-digital-php-mk-wh.png'/>
                    <CardBox>
                        <CardText>Tiramos todas as suas dúvidas através do nosso contato 24h</CardText>
                        <CardLink>Entre em contato conosco</CardLink>
                    </CardBox>
                </Card>
            </SecondaryBox>
        </MainSection>
        </>
    );
}

export default Home;