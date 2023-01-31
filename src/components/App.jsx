import TextForm from "./TextForm/TextForm";
import {RequestHistoryList} from './RequestHistoryList/RequestHistoryList';
import {Main, H1} from './App.styled';
import { Reference } from "./Reference/Reference";

export default function App(){
  return (
    <div style={{display: "flex",}}>
      <Main>
        <H1> Don't forget about spaces between the words!</H1>
        <TextForm></TextForm>
        <RequestHistoryList></RequestHistoryList>
      </Main>
      <Reference/>
    </div>
  );
};
