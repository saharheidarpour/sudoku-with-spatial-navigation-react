import styled from "styled-components";
const Container = styled.div``;
const Table = styled.table`
  margin: 10px;
`;
const TableRow = styled.tr`
  &:first-child td {
    border-top-color: black;
  }
  &:nth-child(3n) td {
    border-bottom-color: black;
  }
`;
const TableColumn = styled.td`
  border: 1px solid ${({ focused }) => (focused ? "blueviolet" : "lightgrey")};
  height: 40px;
  width: 40px;
  &:first-child {
    border-left-color: ${({ focused }) => (focused ? "blueviolet" : "black")};
  }
  &:nth-child(3n) {
    border-right-color: ${({ focused }) => (focused ? "blueviolet" : "black")};
  }
  input {
    background: ${({ focused }) => (focused ? "aliceblue" : "#fff")};
  }
`;
const Input = styled.input`
  padding: 0;
  text-align: center;
  border: 0;
  height: 40px;
  width: 40px;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 0 #2196f3;

  &:hover {
    background: aliceblue;
  }
`;
const Button = styled.button`
  width: 120px;
  border: 1px solid ${({ focused }) => (focused ? "red" : "lightgrey")};
  margin: 0 15px;
  background-color: #276adb;
  color: #fff;
  font-size: 20px;
  padding: 10px;
`;
const ResultLabel = styled.label`
  font-size: 20px;
  color: ${({ result }) => (result ? "#34c334" : "red")};
  font-weight: bold;
`;
export { Container, Table, Input, TableRow, TableColumn, Button, ResultLabel };
