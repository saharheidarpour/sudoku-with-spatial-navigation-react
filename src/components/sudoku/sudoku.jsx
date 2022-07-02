import {
  Container,
  Table,
  Input,
  TableRow,
  TableColumn,
  Button,
  ResultLabel,
} from "./style";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import React from "react";
import { useEffect, useState, useRef, useCallback,createRef } from "react";
const problem = [
  "","1","","","4","","","5","",
  "4","","7","","","","6","","2",
  "8","2","","6","","","","7","4",
  "","","","","1","","5","","","5",
  "","","","","","","","3","","","4",
  "","5","","","","","9","6","","","",
  "3","","4","5","3","","5","","","","8",
  "","1","","7","","","2","","","3","",
];
const solved = [
"6","1","9","7","4","2","3","5","8",
"4","5","7","8","3","1","6","9","2",
"8","2","3","6","9","5","1","7","4",
"2","3","6","4","1","9","5","8","7",
"5","9","1","2","7","8","4","6","3",
"7","8","4","3","5","6","2","1","9",
"9","6","2","1","8","3","7","4","5",
"3","4","5","9","6","7","8","2","1",
"1","7","8","5","2","4","9","3","6",
];
const TableColumnComponent = ({ focused, children ,columnRef}) => {
  return <TableColumn ref={columnRef} focused={focused}>{children}</TableColumn>;
};

const TableColumnFocusable = withFocusable()(TableColumnComponent);

const SudokuGame = ({ setFocus }) => {
  const [position, setPosition] = useState();
  const [result, setResult] = useState();
  const [data, setData] = useState(problem);
  let columnRefs=useRef([]);
  columnRefs.current = [...Array(36)].map((element, i) => columnRefs.current[i] ?? createRef()); 
  const onBecameFocusedHandler = (e,ref) => {
    setPosition(e);
    if(ref.current){
      ref.current.children[0].focus();
    }
  };

  const onArrowPressHandler = (direction) => {};
  useEffect(() => {
    setFocus();
  }, []);

  const checkResult = () => {
    let result = true;
    for (let i = 0; i < 81; i++) {
      if (data[i].toString() !== solved[i].toString()) {
        result = false;
        break;
      }
    }
    console.log(data);
    setResult(result);
  };
  // when user changes value on cell
  const changeData = (index, e) => {
    data[index] = e.target.value;
    setData([...data]);
  };
  return (
    <Container>
      <Table>
        <tbody>
          {[...Array(9)].map((x, i) => (
            <TableRow>
              {[...Array(9)].map((x, j) => (
                <TableColumnFocusable
                columnRef={columnRefs.current[i * 9 + j]}
                  onArrowPress={onArrowPressHandler}
                  onBecameFocused={(e)=>onBecameFocusedHandler(e,columnRefs.current[i * 9 + j])}
                  key={i.toString() + j.toString()}
                >
                  <Input
                    onChange={(e) => changeData(i * 9 + j, e)}
                    defaultValue={data[i * 9 + j]}
                  />
                </TableColumnFocusable>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Button onClick={checkResult}>Solve</Button>
      <ResultLabel result={typeof result === "boolean" && result}>
        {typeof result === "boolean" ? (result ? "Correct" : "Wrong") : ""}
      </ResultLabel>
    </Container>
  );
};
export default withFocusable()(SudokuGame);
