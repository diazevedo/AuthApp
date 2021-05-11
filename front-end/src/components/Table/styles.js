import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 558px) {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
  }
`;

export const Table = styled.table`
  color: #e0e0e0;
  width: 100%;

  border-collapse: collapse;
  border-style: hidden;

  table-layout: fixed;

  * {
    vertical-align: middle;
    text-align: left;
  }
`;

export const Caption = styled.caption`
  padding: 0 2.5rem;

  @media (min-width: 558px) {
    padding: 2.5rem 5rem;
    /** as the table has border-style hidden the 
      tr in the borders won't have borders
    */
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const CaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    margin-right: 6rem;

    > p {
      margin-top: 1rem;
    }

    > p:first-child {
      @media (min-width: 558px) {
        font-size: 2.4rem;
      }
    }

    > p:last-child {
      line-height: 1.8rem;

      @media (min-width: 558px) {
        font-size: 1.4rem;
      }
    }
  }
`;

export const TBody = styled.tbody`
  tr {
    border-bottom: 1px solid #e0e0e0;
    border-radius: 12px;

    > th {
      width: 40%;
      font-size: 1.4rem;
      text-transform: uppercase;
      padding-left: 2.5rem;

      @media (min-width: 558px) {
        padding-left: 5rem;
      }
    }
  }

  td {
    font-weight: 500;
    padding: 3rem 2.5rem;
    text-align: right;
    font-size: 1.6rem;
    display: block;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 558px) {
      padding: 3rem 5rem;
      font-size: 1.8rem;
    }
  }
`;

export const FirstTr = styled.tr`
  padding-bottom: 1rem;

  @media (min-width: 558px) {
    padding: 1.5rem 5rem;
  }

  img {
    border-radius: 8px;
    width: 7.2rem;
    height: 7.2rem;
    background-color: #e0e0e0;
  }
`;
