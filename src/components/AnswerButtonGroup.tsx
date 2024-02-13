import { Button, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ContentKey, useContentString, useStrings } from "../texts";
import withTestAnswer, { WithTestAnswerProps } from "../hocs/withTestAnswer";
import { SX_AVATAR__ICON } from "../mui-material/sx";
import ToggleProfileButton from "./Button/ToggleProfileButton";

interface AnswerButtonGroupProps extends WithTestAnswerProps {

};

function AnswerButtonGroup( { testIndex, answer, setAnswer } : AnswerButtonGroupProps ){

    const strings = Object(useStrings().public.contents.test.test)[testIndex.index];   

    const handleAnswerChange = ( value: number ) => {
        setAnswer( value );
    }   

    return(
        <Stack direction={"row"} spacing={2} justifyContent="space-around" alignItems="stretch" className="button-group--in-body"> 
        {
            ( Object.values(strings.answers) as { icon: string, label: string, value: number }[]).map(({ icon, label, value }) =>(
                <ToggleProfileButton contained size={'small'} key={ value } value={ value } selected={ value === answer } onChange={ (_, value) => handleAnswerChange( value ) } label={label}>
                    { icon }
                </ToggleProfileButton>
            ))
        }
        </Stack>
    );
}

// const LeadershipAnswerButtonGroup = withTestAnswer( AnswerButtonGroup )({ index: "leadership", subIndex: "leadership" });
// const ScheuleAnswerButtonGroup = withTestAnswer( AnswerButtonGroup )({ index: "Scheule", subIndex: "Scheule" });

export default withTestAnswer( AnswerButtonGroup );