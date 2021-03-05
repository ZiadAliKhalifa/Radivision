
import Button from '@material-ui/core/Button';


export default function CustomButton(props) {
    return <Button
        value={props.value}
        onClick={e => props.click(e.currentTarget.value)}
        variant="contained"
        color="primary"
        disabled={props.disabled}
    > {props.value} </Button>
}
