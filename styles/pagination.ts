import styled from 'styled-components';

const Pagination = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;

  a {
    width: 36px;
    height: 36px;
    text-align: center;
    font-size: 15px;
    color: #B6116E;
    border: 2px solid #B6116E;
    border-radius: 3px;
    padding: 8px;
  }

  a:hover {
    background-color: #e43fa0;
    color: white;
  }
`;

export default Pagination;
