import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/homes.svg";
import { ReactComponent as SearchAdvensed } from "../../assets/icons/advanced.svg";
import { ReactComponent as SearchLoop } from "../../assets/icons/search.svg";
export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0 100px;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 2px;
  gap: 10px;
  @media (max-width:550px){
    display:none ;
  }
`;

export const Icons = styled.div``;

Icons.SearchIcon = styled(SearchIcon)`
  display: flex;
  margin: auto;
`;
Icons.SearchAdvensed = styled(SearchAdvensed)`
  display: flex;
  margin-right: 8px;
`;
Icons.SearchLoop = styled(SearchLoop)`
  display: flex;
  margin-right: 8px;
`;

export const ContentWrapperr = styled.div`
  display: flex;
  flex-direction: column;
  height:360px ;
`;

export const Fragment = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 10px;
`;
