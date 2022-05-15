import styled from 'styled-components';
import { Heading } from 'components';
import {
  Clock,
  Map,
  Phone,
  World,
  Copyright as CopyIcon,
  BrandInstagram,
  BrandFacebook,
  BrandYoutube,
} from 'tabler-icons-react';
import { ThemeProps } from 'theme';

const Foot = styled.footer`
  background-color: ${(p: ThemeProps) => p.theme.colors.dark1};
  color: ${(p: ThemeProps) => p.theme.colors.light1};
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p: { col: string }) => p.col}, 1fr);
  grid-column-gap: 50px;
  &:not(:last-child) {
    margin-bottom: 100px;
  }
`;

const Column = styled.div`
  display: grid;
  position: relative;
`;

const ListItem = styled.li`
  color: ${(p: ThemeProps) => p.theme.colors.light1};
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-column-gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 25px auto 0;
`;
const CopyText = styled.span`
  margin-left: 5px;
  font-size: 0.8rem;
  color: ${(p: ThemeProps) => p.theme.colors.light1};
`;

export function Footer() {
  return (
    <Foot>
      <div className="container">
        <Block col="3">
          <Column>
            <Heading size="h3" text="About Us" textAlign="left" />
            <span>Welcome to Movie List!</span>
          </Column>
          <Column>
            <Heading size="h3" text="Opening Hours" textAlign="left" />
            <ul className="list">
              <ListItem>
                <Clock size={16} />
                Monday: Friday: 7am - 8pm
              </ListItem>
              <ListItem>
                <Clock size={16} />
                Saturday: 10am - 6pm
              </ListItem>
              <ListItem>
                <Clock size={16} />
                Sunday: 11am - 6pm
              </ListItem>
            </ul>
          </Column>
          <Column>
            <Heading size="h3" text="Contact Us" textAlign="left" />
            <ul className="list">
              <ListItem>
                <Map size={16} />
                123 Street Avenue
              </ListItem>
              <ListItem>
                <Phone size={16} />
                +571 555 55555
              </ListItem>
              <ListItem>
                <World size={16} />
                Earth
              </ListItem>
            </ul>
          </Column>
        </Block>
        <Block col="1">
          <Heading size="h1" text="Movie List" />
          <Social>
            <a href="https://www.facebook.com" target="_blank">
              <BrandFacebook size={40} color={'white'}></BrandFacebook>
            </a>
            <a href="https://www.instagram.coma" target="_blank">
              <BrandInstagram size={40} color={'white'}></BrandInstagram>
            </a>
            <a href="//google.com" target="_blank">
              <BrandYoutube size={40} color={'white'}></BrandYoutube>
            </a>
          </Social>
        </Block>

        <Block col="1">
          <Copyright>
            <CopyIcon size={16} color={'white'} />
            <CopyText>Movie List</CopyText>
          </Copyright>
        </Block>
      </div>
    </Foot>
  );
}
